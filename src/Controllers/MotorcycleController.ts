import { NextFunction, Request, Response } from 'express';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import AbstractController from './AbstractController';

export default class MotorcycleController extends AbstractController<IMotorcycle, Motorcycle> {
  constructor(req: Request, res: Response, next: NextFunction) {
    const service = new MotorcycleService();
    super(req, res, next, service);
  }
}