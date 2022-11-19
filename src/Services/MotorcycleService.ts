import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import HttpException from '../utils/HttpException';

export default class MotorcycleService {
  private createCarDomain(bike: IMotorcycle | null): Motorcycle | null | undefined {
    if (bike) {
      return new Motorcycle(bike);
    }
    return null;
  }

  public async addCar(bike: IMotorcycle) {
    const bikeODM = new MotorcycleODM();
    const newBike = await bikeODM.create(bike);
    return this.createCarDomain(newBike);
  }

  public async getAll() {
    const bikeODM = new MotorcycleODM();
    const getAllMotos = await bikeODM.getAll();
    const motorcycle = getAllMotos.map((bike) => this.createCarDomain(bike));
    return motorcycle;
  }

  public async getById(id: string) {
    const bikeODM = new MotorcycleODM();
    const bikeArray = await bikeODM.getAll();
    const motorcycle = bikeArray.find((bike) => bike.id === id);

    if (!isValidObjectId(id)) throw new HttpException('Invalid mongo id', 422);

    if (!motorcycle) throw new HttpException('Motorcycle not found', 404);
    return this.createCarDomain(motorcycle);
  }

  public async updateCar(id: string, bike: IMotorcycle) {
    if (!isValidObjectId(id)) throw new HttpException('Invalid mongo id', 422);
    
    const bikeODM = new MotorcycleODM();
    const bikeId = await bikeODM.getAll();
    const bikeExist = bikeId.some((item) => item.id === id);
    if (!bikeExist) throw new HttpException('Motorcycle not found', 404);
    
    const motorcycleUpdate = await bikeODM.update(id, bike);
    return this.createCarDomain(motorcycleUpdate);
  }
}