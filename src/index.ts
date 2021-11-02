import express from 'express';
import { Sequelize } from 'sequelize';
import { server, postgreSQL, uriPostgreSQL } from './config';

const app = express();
const sequelize = new Sequelize(uriPostgreSQL);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        error: 'The page was deleted or not created'
    });
});

app.listen(server.port, (): void => {
    console.log(`[Express] Listen on ${server.port} port`);
});

sequelize.authenticate()
    .then(() => console.log(`[PostgreSQL] Listen on ${postgreSQL.port} port`))
    .catch((err) => console.error(err))