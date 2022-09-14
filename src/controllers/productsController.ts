import { Request, Response } from 'express';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response): Promise<Response> => {
  const result = await productsService.create(req.body);
  return res.status(200).json(result);
};

export default { create };