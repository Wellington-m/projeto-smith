import { NextFunction, Response } from 'express';
import tokenHelper from '../helpers/token';
import IRequestInterface from '../interfaces/requestInterface';

const tokenValidation = (req: IRequestInterface, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
  const result = tokenHelper.verifyToken(authorization);
  if (!result) return res.status(401).json({ message: 'Expired or invalid token' });
  
  req.id = result.id;

  next();
};

export default tokenValidation;