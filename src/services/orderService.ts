import orderModel from '../models/orderModel';

const listAllOrders = async () => {
  const result = await orderModel.listAllOrders();
  return result;
};

export default { listAllOrders };