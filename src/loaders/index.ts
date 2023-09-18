import 'reflect-metadata';
import dotenv from 'dotenv';
import { createContainer, InjectionMode } from 'awilix';
import { Express } from 'express';

import apiLoader from './api';
import servicesLoader from './services';
import repositoriesLoader from './repositories';
import databaseLoader from './database';

dotenv.config();

type Options = {
    expressApp: Express;
};

export default async ({ expressApp }: Options) => {
    console.log('Creating DI container...');
    const container = createContainer({
        injectionMode: InjectionMode.PROXY,
    });
    console.log('DI container created');

    console.log('Loading database...');
    await databaseLoader({ container });
    console.log('Database loaded');

    console.log('Loading repositories...');
    await repositoriesLoader({ container });
    console.log('Repositories loaded');

    console.log('Loading services...');
    await servicesLoader({ container });
    console.log('Services loaded');

    /**
     * Now that all is registered in the container
     * we can inject the container itself in the request
     */
    expressApp.use((req, _, next) => {
        (req as any).scope = container.createScope();
        next();
    });

    await apiLoader({ app: expressApp });
};
