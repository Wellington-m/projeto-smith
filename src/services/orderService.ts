import IOrderReturn from '../interfaces/orderReturnInterface';
import IRegisterOrder from '../interfaces/registerOrderInterface';
import orderModel from '../models/orderModel';

const listAllOrders = async (): Promise<IOrderReturn[]> => {
  const result = await orderModel.listAllOrders();
  return result;
};

const registerOrder = async (orderInfos: IRegisterOrder) => {
  await orderModel.registerOrder(orderInfos);
};

export default { listAllOrders, registerOrder };