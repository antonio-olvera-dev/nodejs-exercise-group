import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/product.model';
import { Provider } from '../models/provider.model';

class ProvidersController {

    public async index(req: Request, res: Response) {

        try {
            
            const providers = await Provider.findAll({
                raw: true,
                include:[Product],
                nest:true
            });
            console.log(providers);

            res.send(providers);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

        
    }

}

export const providersController = new ProvidersController();