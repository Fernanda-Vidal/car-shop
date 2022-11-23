import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.delete(
  '/:id',
  (req, res, next) => new CarController(req, res, next).delete(),
); 

routes.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);
  
routes.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).getAll(),
);
  
routes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);
export default routes;