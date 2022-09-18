import ILogin from '../interfaces/loginInterface';
import tokenHelper from '../helpers/token';
import loginModel from '../models/loginModel';

const login = async (loginInfo: ILogin): Promise<string | null> => {
  const userInfo = await loginModel.getUserInfosByUsername(loginInfo.username);
  if (userInfo.length === 0) return null;
  if (userInfo[0].password !== loginInfo.password) return null;
  const token = tokenHelper.createToken({ id: userInfo[0].id });   
  return token;
};

export default { login };