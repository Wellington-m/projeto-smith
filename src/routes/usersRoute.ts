import { Router } from 'express';
import userController from '../controllers/userController';

const usersRoute = Router();

usersRoute.post('/', userController.create);

export default usersRoute;