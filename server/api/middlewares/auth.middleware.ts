import { NextFunction, Request, Response } from 'express';
import ApiError from '../utils/api-error-handler';

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.user
    ? next()
    : res.sendStatus(401).json(new ApiError(401, 'Unauthorized Access'));
}
