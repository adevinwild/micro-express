import { Express, urlencoded } from 'express';
import bodyParser from 'body-parser';

import routes from '../api';

type Options = {
    app: Express;
};
export default async ({ app }: Options): Promise<Express> => {
    app.use(bodyParser.json());
    app.use(urlencoded({ extended: true }));

    app.get('/health', (_, res) => {
        res.send('OK');
    });

    app.use('/', routes());

    return app;
};
