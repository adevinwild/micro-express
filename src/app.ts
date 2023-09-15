import express from 'express';
import loaders from './loaders';

(async () => {
    const app = express();

    try {
        await loaders({ expressApp: app });

        app.listen(9000, () => {
            console.log('Server is listening on port 3000!');
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
