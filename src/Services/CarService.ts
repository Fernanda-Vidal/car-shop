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
    const carODM = new CarODM();
    const carId = await carODM.getAll();
    const car = carId.find((a) => a.id === id);
    if (!isValidObjectId(id)) throw new HttpException('Invalid mongo id', 422);

    if (!car) throw new HttpException('Car not found', 404);
    return this.createCarDomain(car);
  }
}