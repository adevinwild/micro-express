import { Router } from 'express';
import apiRoutes from './routes';

export default () => {
    const app = Router();

    apiRoutes(app);

    return app;
};
