import dotenv from "dotenv";
import { Server, PostgreSQL } from '../types/config';
dotenv.config({ path: __dirname + '/../../process.env' });

const { SERVER_PORT } = process.env;
const { POSTGRE_SQL_USER, POSTGRE_SQL_PASSWORD, POSTGRE_SQL_HOST, POSTGRE_SQL_PORT, POSTGRE_SQL_NAME } = process.env;

export const server: Server = {
    port: Number(SERVER_PORT) || 3000
}

export const postgreSQL: PostgreSQL = {
    user: POSTGRE_SQL_USER || 'root',
    password: POSTGRE_SQL_PASSWORD || '',
    host: POSTGRE_SQL_HOST || 'localhost',
    port: Number(POSTGRE_SQL_PORT) || 5432,
    dataBaseName: POSTGRE_SQL_NAME || 'urban_smart'
}