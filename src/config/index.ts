import dotenv from "dotenv";
import { Server } from '../types/config';
dotenv.config({ path: __dirname + '/../../process.env' });

const { SERVER_PORT } = process.env;

export const server: Server = {
    port: Number(SERVER_PORT) || 3000
}