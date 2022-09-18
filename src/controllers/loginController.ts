import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const result = await loginService.login({ username, password });
  return res.status(StatusCodes.OK).json({ token: result });
};

export default { login };