import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

const getUserInfosByUsername = async (username: string) => {
  const [rows] = await connection.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.Users WHERE username = ?;`, [username]);
  return rows;
};

export default { getUserInfosByUsername };