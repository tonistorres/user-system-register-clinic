"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_abstract_1 = __importDefault(require("../../abstracts/person.abstract"));
class UserSystem extends person_abstract_1.default {
    constructor(usuario, sexo, cpf, celular, login, senha, perfil, email, estado) {
        super(usuario, sexo);
        this._cpf = '';
        this._celular_principal = '';
        this._login = '';
        this._senha = '';
        this._perfil = '';
        this._email_principal = '';
        this._estado = '';
        this.cpf = cpf;
        this.celular = celular;
        this.login = login;
        this.senha = senha;
        this.perfil = perfil;
        this.email = email;
        this.estado = estado;
        this._cadastro = new Date();
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        if (cpf.length > 15)
            throw Error('CPF inválido! CPF deve possuir até 15 caracter(es))');
        if (!cpf)
            throw Error('CPF é Obrigatorio ');
        this._cpf = cpf;
    }
    get celular() {
        return this._celular_principal;
    }
    set celular(celular) {
        if (celular.length > 15)
            throw Error('Celular inválido! Celular deve possuir até 15 caracter(es))');
        this._celular_principal = celular.toUpperCase().trim();
    }
    get login() {
        return this._login;
    }
    set login(login) {
        if (login.length > 15)
            throw Error('login inválido! login deve possuir até 15 caracter(es))');
        if (!login)
            throw Error('login é Obrigatorio ');
        this._login = login.trim();
    }
    get senha() {
        return this._senha;
    }
    set senha(senha) {
        if (senha.length > 10)
            throw Error('senha inválido! senha deve possuir até 9 caracter(es))');
        if (!senha)
            throw Error('senha é Obrigatorio ');
        this._senha = senha.trim();
    }
    get perfil() {
        return this._perfil;
    }
    set perfil(perfil) {
        if (perfil.length > 45)
            throw Error('perfil inválido! perfil deve possuir até 45 caracter(es))');
        if (!perfil)
            throw Error('perfil é Obrigatorio ');
        this._perfil = perfil.toUpperCase().trim();
    }
    get email() {
        return this._email_principal;
    }
    set email(email) {
        if (email.length > 100)
            throw Error('email inválido! email deve possuir até 100 caracter(es))');
        this._email_principal = email.toUpperCase().trim();
    }
    get estado() {
        return this._estado;
    }
    set estado(estado) {
        if (estado.length > 46)
            throw Error('estado inválido! estado deve possuir até 45 caracter(es))');
        if (!estado)
            throw Error('estado é Obrigatorio ');
        this._estado = estado.toUpperCase().trim();
    }
    toString() {
        return `
 -----------------------------------------
    Dados da Pessoa Usuária do Sistema
 ----------------------------------------
 cpf: ${this._cpf} usuario: ${this.usuario}
 celular: ${this._celular_principal} perfil:${this._perfil}
 login: ${this._login} senha: ${this._senha}
 sexo: ${this.sexo} email: ${this._email_principal}
 estado cadastro: ${this._estado} DtCadastro: ${this._cadastro}
 ----------------------------------------
 `;
    }
}
exports.default = UserSystem;
