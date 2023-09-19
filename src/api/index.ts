import { Router } from 'express';
import apiRoutes from './routes';
import apiLogger from './middlewares/api-logger';

export default (): Router => {
    const app = Router();

    app.use(apiLogger());
    apiRoutes(app);

    return app;
};
