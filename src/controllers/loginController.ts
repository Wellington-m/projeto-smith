import { Request, Response } from 'express';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const result = await loginService.login({ username, password });
  if (!result) return res.status(401).json({ message: 'Username or password invalid' });
  return res.status(200).json({ token: result });
};

export default { login };