import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import carRoutes from './Routes/carRoutes';
import motorcycleRoutes from './Routes/motorcyclesRoutes';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);
app.use(ErrorHandler.handle);

export default app;
