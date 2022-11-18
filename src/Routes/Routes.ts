import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

export default routes;