import express from 'express';
import loaders from './loaders';
import { MicroLogger } from './loaders/logger';

(async () => {
    const app = express();

    try {
        const { container } = await loaders({ expressApp: app });
        const logger: MicroLogger = container.resolve('logger');

        const PORT = 9000;

        app.listen(PORT, () => {
            logger.info(`µExpress | Listening on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
