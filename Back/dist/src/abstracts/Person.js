"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(usuario, sexo) {
        this._usuario = '';
        this._sexo = '';
        this.usuario = usuario;
        this.sexo = sexo;
    }
    get usuario() {
        return this._usuario;
    }
    set usuario(usuario) {
        if (usuario.length < 2)
            throw Error('Dados inválidos usuario deve ter pelo menos 2 caracter(s)');
        if (!usuario)
            throw Error('Usuario Obrigatorio ');
        if (typeof usuario !== 'string')
            throw Error('Usuario é do tipo String');
        this._usuario = usuario.toUpperCase().trim();
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        if (sexo.length < 8 && sexo.length > 9)
            throw Error('MASCULINO - 9 caracters / FEMININO - 8 caracter');
        if (!sexo)
            throw Error('Sexo Obrigatorio ');
        if (typeof sexo !== 'string')
            throw Error('Sexo é do tipo String');
        this._sexo = sexo.toUpperCase().trim();
    }
}
exports.default = Person;
