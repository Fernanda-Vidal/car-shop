import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.delete(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);
  
routes.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycle(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

routes.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

routes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default routes;