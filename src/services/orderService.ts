import IOrderReturn from '../interfaces/orderReturnInterface';
import orderModel from '../models/orderModel';

const listAllOrders = async (): Promise<IOrderReturn[]> => {
  const result = await orderModel.listAllOrders();
  return result;
};

const registerOrder = async () => {
  const result = await orderModel.registerOrder();
};

export default { listAllOrders, registerOrder };