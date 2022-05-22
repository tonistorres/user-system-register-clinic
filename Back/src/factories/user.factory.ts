import connection from "../models/connections/connection";
import UserSystemMysqlRepo from "../models/repositories/user.repository.mysql";
import UserService from "../services/user.system.service";

export default class UserFactory {
    public static create(){
        const userSystemMysqlRepo = new UserSystemMysqlRepo(connection);
        const userService = new UserService(userSystemMysqlRepo);
        return userService;
    } 
}