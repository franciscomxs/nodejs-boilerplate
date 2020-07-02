import express from 'express';

const routes = express.Router();

routes.get('/ping', (request, response) => response.json({ ok: true }));

export default routes;
