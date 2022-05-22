import UserSystem from "../models/class/user.system.class";
import UserRepoMYSQL from "../models/repositories/user.repository.mysql";

export default class UserSystemService {

    private _userRepoMYSQL: UserRepoMYSQL;

    constructor(userRepository: UserRepoMYSQL) {
        this._userRepoMYSQL = userRepository;
    }

    async getAll(): Promise<Array<UserSystem>> {
        return await this._userRepoMYSQL.getAll();
    }

    async create(
        cpf: string,
        usuario: string,
        celular: string,
        login: string,
        senha: string,
        perfil: string,
        sexo: string,
        email: string,
        estado: string,        
        ): Promise<UserSystem> {
        const user = new UserSystem(usuario,sexo,cpf,celular,login,senha,perfil,email,estado);
        const userCreated = await this._userRepoMYSQL.create(user);
        return userCreated;
    }


}