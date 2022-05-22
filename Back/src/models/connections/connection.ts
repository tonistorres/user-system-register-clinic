import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  // host: process.env.MYSQL_HOST,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.DB_NAME,
  port:3306,
  host: 'localhost',
  user: 'root',
  password: '8Hyy+-XqcH8$c#-',
  database: 'bd_clinica',
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query


export default connection;