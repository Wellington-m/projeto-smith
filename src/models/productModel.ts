import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';
import connection from './connection';

const findAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.Products`);
  return rows as IProduct[];
};

const create = async (product: IProduct): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);`, [product.name, product.amount]);
  return result;
};

const createWithOrder = async (product: IProduct): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products
  (name, amount, orderId) VALUES (?, ?);`, 
    [product.name, product.amount, product.orderId],
  );
  return result;
};

export default { findAll, create, createWithOrder };