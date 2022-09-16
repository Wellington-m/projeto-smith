import IUserCreate from '../interfaces/userCreateInterface';
import userModel from '../models/userModel';

const create = async (userInfo: IUserCreate) => {
  const result = await userModel.create(userInfo);
  return result;
};

export default { create };