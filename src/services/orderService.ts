import IOrderReturn from '../interfaces/orderReturnInterface';
import orderModel from '../models/orderModel';

const listAllOrders = async (): Promise<IOrderReturn[]> => {
  const result = await orderModel.listAllOrders();
  return result;
};

export default { listAllOrders };