import { Router } from 'express';
import dummyRoutes from './dummy';

export default (app: Router): Router => {
    const route = Router();
    app.use('/api', route);

    dummyRoutes(route);

    return app;
};
