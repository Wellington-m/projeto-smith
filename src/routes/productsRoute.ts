import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRoute = Router();

productsRoute.post('/', productsController.create);
productsRoute.get('/', productsController.findAll);

export default productsRoute;