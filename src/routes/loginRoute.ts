import { Router } from 'express';
import loginValidation from '../middlewares/loginValidation';
import loginController from '../controllers/loginController';

const loginRoute = Router();

loginRoute.post('/', loginValidation, loginController.login);

export default loginRoute;