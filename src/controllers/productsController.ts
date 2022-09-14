import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response): Promise<Response> => {
  const result = await productsService.create(req.body);
  return res.status(StatusCodes.CREATED).json(result);
};

export default { create };