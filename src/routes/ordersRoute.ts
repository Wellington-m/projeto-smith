import { Router } from 'express';
import orderController from '../controllers/orderController';

const ordersRoute = Router();

ordersRoute.get('/', orderController.listAllOrders);

export default ordersRoute;