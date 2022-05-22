import { Pool, ResultSetHeader } from 'mysql2/promise';
import UserSystem from '../class/user.system.class';
import IGenericMethods from "../../interfaces/interface.generic.metodh";

export default class UserSystemMysqlRepo implements IGenericMethods<UserSystem> {

    private _connection: Pool

    constructor(connetion: Pool) {
        this._connection = connetion;
    }
 
    async getAll(): Promise<UserSystem[]> {
        const [users] = await this._connection.execute('SELECT * FROM tbusuarios');
        return users as Array<UserSystem>;
    }

    create(tipo: UserSystem): Promise<UserSystem> {
        throw new Error('Method not implemented.');
    }

    update(product: UserSystem): Promise<UserSystem> {
        throw new Error('Method not implemented.');
    }
    
    getById(id: string): Promise<UserSystem> {
        throw new Error('Method not implemented.');
    }


}