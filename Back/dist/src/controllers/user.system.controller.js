"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_factory_1 = __importDefault(require("../factories/user.factory"));
const status_code_enum_1 = __importDefault(require("../enums/status.code.enum"));
const userService = user_factory_1.default.create();
class UserSystemController {
    constructor() {
        this.getAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userService.getAll();
                res.status(status_code_enum_1.default.status200).json(users);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UserSystemController;
