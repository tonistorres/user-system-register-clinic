import { Request, Response, NextFunction } from "express";
import UserFactory from "../factories/user.factory";
import StatusCode from "../enums/status.code.enum";


const userService = UserFactory.create();

export default class UserSystemController {

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userService.getAll();
      res.status(StatusCode.status200).json(users);
    } catch (error) {
      next(error);
    }
  };

  // 1 - trirar dúvida como retornar o id nesse contexto 
  // 2 - Como preencher data no campo timestemp do banco 
  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {cpf, usuario, celular, login, senha, perfil, sexo, email, estado} = req.body;
      const createdUser = await userService
      .create(cpf, usuario,celular,login,senha,perfil,sexo,email,estado);
      return res.status(StatusCode.status201).json(createdUser);  
    } catch (error) {
      next(error)
    }
  }

  

}