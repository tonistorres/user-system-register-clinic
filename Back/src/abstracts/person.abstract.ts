
export default abstract class Person {

    private _usuario: string = '';
    private _sexo: string = '';
    
    

    constructor(usuario: string, sexo: string) {

        this.usuario = usuario;
        this.sexo = sexo;
    }

    get usuario(): string {
        return this._usuario;
    }

    public set usuario(usuario: string) {
        if (usuario.length < 2) throw Error('Dados inválidos usuario deve ter pelo menos 2 caracter(s)');
        if(!usuario) throw Error ('Usuario Obrigatorio ');
        if(typeof usuario !== 'string') throw Error('Usuario é do tipo String');
        this._usuario = usuario.toUpperCase().trim();
    }
    
    get sexo(): string {
        return this._sexo;
    }

    public set sexo(sexo: string) {
        if (sexo.length < 8 && sexo.length > 9) throw Error('MASCULINO - 9 caracters / FEMININO - 8 caracter')
        if(!sexo) throw Error ('Sexo Obrigatorio ');
        if(typeof sexo !== 'string') throw Error('Sexo é do tipo String');
        this._sexo = sexo.toUpperCase().trim();
    }

    public abstract toString(): string;

}