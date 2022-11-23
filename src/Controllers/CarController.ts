import { NextFunction, Request, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import AbstractController from './AbstractController';

export default class CarController extends AbstractController<ICar, Car> {
  constructor(req: Request, res: Response, next: NextFunction) {
    const service = new CarService();
    super(req, res, next, service);
  }
}