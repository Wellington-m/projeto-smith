import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrderReturn from '../interfaces/orderReturnInterface';
import IRegisterOrder from '../interfaces/registerOrderInterface';
import connection from './connection';

const listAllOrders = async (): Promise<IOrderReturn[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(`
  SELECT 
  orders.id AS id,
    userId,
    JSON_ARRAYAGG(products.id) AS productsIds
FROM 
  Trybesmith.Orders AS orders
INNER JOIN Trybesmith.Products AS products
ON 
  orders.id = products.orderId
GROUP BY
  orders.id
ORDER BY 
  userId;`);
  return result as IOrderReturn[];
};

const registerOrder = async (orderInfos: IRegisterOrder) => {
  const result = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.Orders (userId) VALUES (?);`, [orderInfos.userId]);
  console.log(result);
};

export default { listAllOrders, registerOrder };