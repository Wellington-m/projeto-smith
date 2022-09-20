import { Router } from 'express';
import orderController from '../controllers/orderController';

const ordersRoute = Router();

ordersRoute.get('/', orderController.listAllOrders);
ordersRoute.post('/', orderController.registerOrder);

export default ordersRoute;