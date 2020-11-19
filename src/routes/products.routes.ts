import { Router } from 'express';
import { productsController } from '../controllers/products.controller';


class ProductsRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', productsController.index);
    }
}

export const productRoutes = new ProductsRoutes();