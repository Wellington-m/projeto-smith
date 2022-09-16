import { ResultSetHeader } from 'mysql2';
import IUserCreate from '../interfaces/userCreateInterface';
import connection from './connection';

const create = async (userInfo: IUserCreate): Promise<ResultSetHeader> => {
  const { username, classe, level, password } = userInfo;
  const [result] = await connection.execute<ResultSetHeader>(
    `
  INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);`,
    [username, classe, level, password],
  );
  return result;
};

export default { create };