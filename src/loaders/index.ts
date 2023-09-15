import { createContainer, InjectionMode } from 'awilix';
import { Express } from 'express';

import apiLoader from './api';
import servicesLoader from './services';

type Options = {
    expressApp: Express;
};

export default async ({ expressApp }: Options) => {
    const container = createContainer({
        injectionMode: InjectionMode.PROXY,
    });

    await servicesLoader({ container });

    expressApp.use((req, _, next) => {
        (req as any).scope = container.createScope();
        next();
    });

    await apiLoader({ app: expressApp });
};
