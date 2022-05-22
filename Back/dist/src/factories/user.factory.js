"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connections/connection"));
const user_repository_mysql_1 = __importDefault(require("../models/repositories/user.repository.mysql"));
const user_system_service_1 = __importDefault(require("../services/user.system.service"));
class UserFactory {
    static create() {
        const userSystemMysqlRepo = new user_repository_mysql_1.default(connection_1.default);
        const userService = new user_system_service_1.default(userSystemMysqlRepo);
        return userService;
    }
}
exports.default = UserFactory;
