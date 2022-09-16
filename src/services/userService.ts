import IUserCreate from '../interfaces/userCreateInterface';
import userModel from '../models/userModel';
import tokenHelper from '../helpers/token';

const create = async (userInfo: IUserCreate) => {
  const { insertId } = await userModel.create(userInfo);  
  const token = tokenHelper.createToken({ id: insertId });
  return token;
};

export default { create };