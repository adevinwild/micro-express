import { Express, json, urlencoded } from 'express';

import routes from '../api';

type Options = {
    app: Express;
};
export default async ({ app }: Options) => {
    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.get('/health', (_, res) => {
        res.send('OK');
    });

    app.use('/', routes());

    return app;
};
