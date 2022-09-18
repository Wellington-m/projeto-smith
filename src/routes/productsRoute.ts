import { Router } from 'express';
import productsController from '../controllers/productsController';
import productValidation from '../middlewares/productValidation';

const productsRoute = Router();

productsRoute.post('/', productValidation, productsController.create);
productsRoute.get('/', productsController.findAll);

export default productsRoute;