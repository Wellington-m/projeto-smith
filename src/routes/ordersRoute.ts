import { Router } from 'express';
import orderController from '../controllers/orderController';
import tokenValidation from '../middlewares/tokenValidation';

const ordersRoute = Router();

ordersRoute.get('/', orderController.listAllOrders);
ordersRoute.post('/', tokenValidation, orderController.registerOrder);

export default ordersRoute;