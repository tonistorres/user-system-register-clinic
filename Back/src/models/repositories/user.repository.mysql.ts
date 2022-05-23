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

    async create(user: UserSystem): Promise<UserSystem> {
       const {cpf, usuario, celular, login, senha, perfil, sexo, email, estado} = user;
       const result = await this._connection.execute<ResultSetHeader>(
           'INSERT INTO tbusuarios (CPF, usuario, celular_principal, login, senha, perfil, sexo, email_principal, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
           [cpf, usuario, celular, login, senha, perfil, sexo, email, estado],
         );
          const [dataInserted] = result;
          const { insertId } = dataInserted;
          user.id=insertId;
          return user;
    }

    update(product: UserSystem): Promise<UserSystem> {
        throw new Error('Method not implemented.');
    }
    
   async getById(id:number): Promise<UserSystem> {
    const [dataList] = await this._connection.execute('SELECT * FROM tbusuarios WHERE iduser = ?',[id]);
    const [user] = dataList as UserSystem[];
    return user;
    }


}