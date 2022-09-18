import { Router } from 'express';
import userController from '../controllers/userController';
import createUserValidation from '../middlewares/createUserValidation';

const usersRoute = Router();

usersRoute.post('/', createUserValidation, userController.create);

export default usersRoute;