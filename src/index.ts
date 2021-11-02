import express from 'express';
import {server} from './config';

const app = express();

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