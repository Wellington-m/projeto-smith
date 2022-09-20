import { NextFunction, Request, Response } from 'express';
import tokenHelper from '../helpers/token';

const tokenValidation = (req: Request, res: Response, _next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
  const result = tokenHelper.verifyToken(authorization);
  if (!result) return res.status(401).json({ message: 'Expired or invalid token' });
};

export default tokenValidation;