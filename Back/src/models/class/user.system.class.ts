import Person from "../../abstracts/person.abstract";

export default class UserSystem extends Person {
    
    private _id: number=0;
    private _cpf: string = '';
    private _celular_principal: string = '';
    private _login: string = '';
    private _senha: string = '';
    private _perfil: string = '';
    private _email_principal: string = '';
    private _estado: string = '';
    private _cadastro:Date;



constructor(
    usuario: string,
    sexo: string,
    cpf: string,
    celular: string,
    login: string,
    senha: string,
    perfil: string,
    email: string,
    estado: string,
    id?:number,       
    ){
    super(usuario, sexo)
    
       if(id) this._id = id;
        this.cpf = cpf;
        this.celular = celular;
        this.login = login;
        this.senha = senha;
        this.perfil = perfil;
        this.email = email;
        this.estado = estado;
        this._cadastro = new Date();
}

get id():number{
    return this._id;
}

set id(id:number){
this._id = id;
}

get cpf(): string {
    return this._cpf;
}

get cadastro():Date{
    return this._cadastro;
}

public set cpf(cpf: string) {
    // if (cpf.length > 15 ) throw Error('CPF inválido! CPF deve possuir até 15 caracter(es))');
    if(!cpf) throw Error ('CPF é Obrigatorio ');
    this._cpf = cpf;
}


get celular(): string {
    return this._celular_principal;
}

public set celular(celular: string) {
    if (celular.length >15  ) throw Error('Celular inválido! Celular deve possuir até 15 caracter(es))');
    this._celular_principal = celular.toUpperCase().trim();
}


get login(): string {
    return this._login;
}

public set login(login: string) {
    if (login.length > 15) throw Error('login inválido! login deve possuir até 15 caracter(es))');
    if(!login) throw Error ('login é Obrigatorio ');
    this._login = login.trim();
}


get senha(): string {
    return this._senha;
}

public set senha(senha: string) {
    if (senha.length > 10 ) throw Error('senha inválido! senha deve possuir até 9 caracter(es))');
    if(!senha) throw Error ('senha é Obrigatorio ');
    this._senha = senha.trim();
}


get perfil(): string {
    return this._perfil;
}

public set perfil(perfil: string) {
    if (perfil.length > 45 ) throw Error('perfil inválido! perfil deve possuir até 45 caracter(es))');
    if(!perfil) throw Error ('perfil é Obrigatorio ');
    this._perfil = perfil.toUpperCase().trim();
}


get email(): string {
    return this._email_principal;
}

public set email(email: string) {
    if (email.length > 100 ) throw Error('email inválido! email deve possuir até 100 caracter(es))');
    this._email_principal = email.toUpperCase().trim();
}


get estado(): string {
    return this._estado;
}

public set estado(estado: string) {
    if (estado.length > 46 ) throw Error('estado inválido! estado deve possuir até 45 caracter(es))');
    if(!estado) throw Error ('estado é Obrigatorio ');
    this._estado = estado.toUpperCase().trim();
}


public toString(): string {
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
 `
}

}