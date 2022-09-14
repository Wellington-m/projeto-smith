import IProduct from '../interfaces/productInterface';

const create = async (product: IProduct) => {
  console.log(product);
};

export default { create };