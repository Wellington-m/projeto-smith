import { RowDataPacket } from 'mysql2';
import connection from './connection';

const listAllOrders = async () => {
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
  return result;
};

export default { listAllOrders };