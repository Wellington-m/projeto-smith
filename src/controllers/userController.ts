import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/userService';

const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const result = await userService.create({ username, classe, level, password });
  return res.status(StatusCodes.CREATED).json(result);
};

export default { create };