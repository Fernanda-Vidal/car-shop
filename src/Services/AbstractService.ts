import { isValidObjectId } from 'mongoose';
import AbstractODM from '../Models/AbstractODM';
import HttpException from '../utils/HttpException';

const INVALID_ID = 'Invalid mongo id';

export default class AbstractService<I, D> {
  private model: AbstractODM<I>;
  private modelName: string;

  constructor(
    private Model: new() => AbstractODM<I>,
    private CreateDomain: new(model: I) => D,
    modelName: string,
  ) {
    this.model = new this.Model();
    this.modelName = modelName;    
  }

  public async create(vehicle: I) {
    const newVehicle = await this.model.create(vehicle);
    return new this.CreateDomain(newVehicle);
  }

  public async getAll() {
    const allVehicle = await this.model.getAll();
    const createAll = allVehicle.map((item) => new this.CreateDomain(item));
    return createAll;
  }

  public async getById(id: string) {
    if (!isValidObjectId(id)) throw new HttpException(INVALID_ID, 422);

    const vehicle = await this.model.getById(id);
    if (!vehicle) throw new HttpException(`${this.modelName} not found`, 404);
    return new this.CreateDomain(vehicle);
  }

  public async update(id: string, vehicle: Partial<I>) {
    if (!isValidObjectId(id)) throw new HttpException(INVALID_ID, 422);
    
    const vehicleId = await this.model.getById(id);
    if (!vehicleId) throw new HttpException(`${this.modelName} not found`, 404);
    
    const updated = await this.model.update(id, vehicle);
    if (updated) {
      return new this.CreateDomain(updated);
    }
  }

  public async delete(id:string) {
    if (!isValidObjectId(id)) throw new HttpException(INVALID_ID, 422);

    const { deletedCount } = await this.model.delete(id);

    if (deletedCount < 1) throw new HttpException(`${this.modelName} not found`, 404);
  }
}