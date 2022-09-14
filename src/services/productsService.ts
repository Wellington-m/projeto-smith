import IProduct from '../interfaces/productInterface';
import productModel from '../models/productModel';

const create = async (product: IProduct) => {
  const { insertId } = await productModel.create(product);
  const result: IProduct = {
    id: insertId,
    name: product.name,
    amount: product.amount,
  };
  return result;
};

export default { create };