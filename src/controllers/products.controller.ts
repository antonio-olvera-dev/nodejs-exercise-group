import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/product.model';
import { Provider } from '../models/provider.model';

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

    public async showById(req: Request, res: Response) {

        console.log('id=', req.params.id);
        try {
            // const users = await Product.findByPk(Number(req.params.id), 
            // {include: [model: Provider, as 'Home']});
            const users = await Product.findByPk(Number(req.params.id), {
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