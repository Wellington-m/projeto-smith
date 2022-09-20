import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import orderService from '../services/orderService';

const listAllOrders = async (_req: Request, res: Response): Promise<Response> => {
  const result = await orderService.listAllOrders();
  return res.status(StatusCodes.OK).json(result);
};

const registerOrder = async (_req: Request, _res: Response) => {

};

export default { listAllOrders, registerOrder };