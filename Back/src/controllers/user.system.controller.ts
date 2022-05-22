import { Request, Response, NextFunction } from "express";
import UserFactory from "../factories/user.factory";
import StatusCode from "../enums/status.code.enum";


const userService = UserFactory.create();

export default class UserSystemController{

    public getAll = async (_req: Request, res: Response, next:NextFunction) => {
        try {
          const users = await userService.getAll();
          res.status(StatusCode.status200).json(users);  
        } catch (error) {
          next(error);
        }    
      };


}