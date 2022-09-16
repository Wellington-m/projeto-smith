import { RowDataPacket } from 'mysql2';
import IOrderReturn from '../interfaces/orderReturnInterface';
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

export default { listAllOrders };