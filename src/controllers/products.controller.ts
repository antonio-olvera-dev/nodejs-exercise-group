import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/product.model';

class ProductsController {

    public async index(req: Request, res: Response) {

        try {
            const users = await Product.findAll({
                raw: true
            });
            console.log(users);

            res.send(users);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

        
    }

}

export const productsController = new ProductsController();