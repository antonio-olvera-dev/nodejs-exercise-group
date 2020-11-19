import { Request, Response } from "express";
import { Users } from "./../models/users.model";
export class UsersController {

    async getUsers(req: Request, res: Response) {
        try {
            const allUsers = await Users.findAll({ raw: true });
            res.send(allUsers);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);

        }
    }


    async getUser(req: Request, res: Response) {
        try {
            const userReq = req.params.id;

            const user = await Users.findAll({
                raw: true,
                where: {
                    id: Number(userReq)
                }
            });
            res.send(user);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    }


}

export const usersController = new UsersController();