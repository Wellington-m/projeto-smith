import IUserCreate from '../interfaces/userInterface';
import userModel from '../models/userModel';
import tokenHelper from '../helpers/token';

const create = async (userInfo: IUserCreate): Promise<string> => {
  const { insertId } = await userModel.create(userInfo);  
  const token = tokenHelper.createToken({ id: insertId });
  return token;
};

export default { create };