import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRoute = Router();

productsRoute.post('/', productsController.create);

export default productsRoute;