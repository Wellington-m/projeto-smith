import IProduct from '../interfaces/productInterface';
import productModel from '../models/productModel';

const findAll = async () => {
  const result = await productModel.findAll();
  return result;
};

const create = async (product: IProduct): Promise<IProduct> => {
  const { insertId } = await productModel.create(product);
  const result: IProduct = {
    id: insertId,
    name: product.name,
    amount: product.amount,
  };
  return result;
};

export default { findAll, create };