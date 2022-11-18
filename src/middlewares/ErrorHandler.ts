import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';

export default class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { message, status = 500 } = error as HttpException;
    res.status(status).json({ message });
    next();
  }
}