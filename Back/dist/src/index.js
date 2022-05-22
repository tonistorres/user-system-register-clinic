"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_system_class_1 = __importDefault(require("./models/class/user.system.class"));
const user1 = new user_system_class_1.default('Tonis Torres', 'masculino', '64201562387', '985104285', 'tonis', 'xablau', 'analista', 'sisvenda2011@gmail.com', 'ativo');
console.log(`${user1}`);
