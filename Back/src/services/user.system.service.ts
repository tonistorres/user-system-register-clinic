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

}