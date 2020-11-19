import { Router } from 'express';
import { providersController } from '../controllers/providers.controller';


class ProvidersRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', providersController.index);
    }
}

export const providerRoutes = new ProvidersRoutes();