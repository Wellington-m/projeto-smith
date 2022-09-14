import { ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';
import connection from './connection';

const create = async (product: IProduct) => {
  const [result] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);`, [product.name, product.amount]);
  return result;
};

export default { create };