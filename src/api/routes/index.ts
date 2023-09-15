import { Router } from 'express';
import dummyRoutes from './dummy';

export default (app) => {
    const route = Router();
    app.use('/api', route);

    dummyRoutes(route);

    return app;
};
