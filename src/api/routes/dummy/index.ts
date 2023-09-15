import { Router } from 'express';
import getDummy from './get-dummy';

const route = Router();

export default (app) => {
    app.use('/dummy', route);

    route.get('/', getDummy);

    return app;
};
