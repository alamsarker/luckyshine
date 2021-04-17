import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/config.json';
import datasource from './config/datasource';
import TreasureRouter from './routes/treasure';
import UserRouter from './routes/user';

const app = express();
dotenv.config();
app.config = config[process.env.NODE_ENV || 'development'];
app.datasource = datasource(app);
app.set('port', process.env.API_PORT);

app.use(cors());
app.use(bodyParser.json());

/* eslint no-underscore-dangle: 0 */
app.use('/api/v1', app._router);

TreasureRouter(app);
UserRouter(app);

export default app;
