import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/product.model';
import { Provider } from '../models/provider.model';
import { Users } from '../models/users.model';

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

        
        try {
            
            
           const idd = Number(req.params.id);
            const users = await Product.findByPk(idd, {
            raw:true,
            include: [Provider],
            nest: true
            });
            res.send(users);
            console.log('id=',idd );
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

}

export const productsController = new ProductsController();