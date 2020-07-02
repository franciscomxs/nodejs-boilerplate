import express from 'express';
import routes from './config/routes';

const PORT = 3000;
const HOST = '0.0.0.0';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(PORT, HOST);
