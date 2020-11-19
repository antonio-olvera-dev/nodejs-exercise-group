
import { usersController } from "./../controllers/users.controller";
import {Router  } from "express";

class UsersRouter {

      router:Router = Router();

     constructor(){

        this.router.get('/',  usersController.getUsers);
        this.router.get('/user/:id',  usersController.getUser);
     }
    


}

export const usersRouter = new UsersRouter().router;
