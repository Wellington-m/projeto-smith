import { RowDataPacket } from 'mysql2';
import tokenHelper from '../helpers/token';
import ILogin from '../interfaces/loginInterface';
import connection from './connection';

const getUserInfosByUsername = async (username: string) => {
  const [rows] = await connection.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.Users WHERE username = ?;`, [username]);
  return rows;
};

const login = async (loginInfo: ILogin) => {
  const userInfo = await getUserInfosByUsername(loginInfo.username);
  if (userInfo[0].password !== loginInfo.password) return null;
  const token = tokenHelper.createToken({ id: userInfo[0].id });   
  return token;
};

export default { login };