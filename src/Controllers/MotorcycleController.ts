import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const bike = this.req.body;

    try {
      const motorcycle = await this.service.create(bike);
      return this.res.status(201).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAll();
      return this.res.status(200).json(motorcycles);
    } catch (error) { 
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const motorcycle = await this.service.getById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotorcycle() {
    const { id } = this.req.params;

    try {
      const motorcycleUpdate = await this.service.update(id, this.req.body);
      return this.res.status(200).json(motorcycleUpdate);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    const { id } = this.req.params;

    try {
      await this.service.delete(id);
      return this.res.sendStatus(204);
    } catch (error) {
      this.next(error);
    }
  }
}