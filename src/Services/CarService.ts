import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import HttpException from '../utils/HttpException';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null | undefined {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async addCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const getAllCars = await carODM.getAll();
    const cars = getAllCars.map((car) => this.createCarDomain(car));
    return cars;
  }

  public async getById(id: string) {
    if (!isValidObjectId(id)) throw new HttpException('Invalid mongo id', 422);

    const carODM = new CarODM();
    const car = await carODM.getById(id);

    if (!car) throw new HttpException('Car not found', 404);
    return this.createCarDomain(car);
  }

  public async updateCar(id: string, car: ICar) {
    if (!isValidObjectId(id)) throw new HttpException('Invalid mongo id', 422);
    
    const carODM = new CarODM();
    const carId = await carODM.getAll();
    const carExist = carId.some((item) => item.id === id);
    if (!carExist) throw new HttpException('Car not found', 404);
    
    const carUpdate = await carODM.update(id, car);
    return this.createCarDomain(carUpdate);
  }
}