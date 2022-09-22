import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IRequestInterface from '../interfaces/requestInterface';
import orderService from '../services/orderService';

const listAllOrders = async (_req: Request, res: Response): Promise<Response> => {
  const result = await orderService.listAllOrders();
  return res.status(StatusCodes.OK).json(result);
};

const registerOrder = async (req: IRequestInterface, _res: Response) => {
  const { productsIds } = req.body;
  const { id: userId } = req;
  const orderInfos = {
    productsIds,
    userId,
  };
  await orderService.registerOrder(orderInfos);
};

export default { listAllOrders, registerOrder };