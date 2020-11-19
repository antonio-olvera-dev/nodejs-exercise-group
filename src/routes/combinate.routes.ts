import { Router } from 'express';
import { combinatesController } from '../controllers/combinate.controller';


class CombinatesRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', combinatesController.index);
    }
}

export const combinateRoutes = new CombinatesRoutes();