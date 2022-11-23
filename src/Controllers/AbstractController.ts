import { Request, Response, NextFunction } from 'express';
import AbstractService from '../Services/AbstractService';

export default abstract class AbstractController<T, D> {
  private service: AbstractService<T, D>;

  constructor(
    private req: Request,
    private res: Response, 
    private next: NextFunction,
    private Service: AbstractService<T, D>,
  ) { this.service = Service; }

  public async create() {
    const vehicle = this.req.body;

    try {
      const createVehicle = await this.service.create(vehicle);
      return this.res.status(201).json(createVehicle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const vehicles = await this.service.getAll();
      return this.res.status(200).json(vehicles);
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

  public async update() {
    const { id } = this.req.params;

    try {
      const vehicle = await this.service.update(id, this.req.body);
      return this.res.status(200).json(vehicle);
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