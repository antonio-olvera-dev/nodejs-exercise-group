import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/product.model';
import { Users } from "../models/users.model";

class CombinateController {

    public async index(req: Request, res: Response) {

        try {
            const products = await Product.findAll({
                raw: true
            });

            const users = await Users.findAll({
                raw: true
            });

            const combinate = { products: products, users: users };
            console.log(combinate);

            if (combinate.products.length > 0 && combinate.users.length > 0) {

                res.send(combinate);

            } else {
                console.log(404);
                res.sendStatus(404);
            }



        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }


    }

}

export const combinatesController = new CombinateController();