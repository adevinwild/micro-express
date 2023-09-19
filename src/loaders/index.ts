import 'reflect-metadata';
import dotenv from 'dotenv';
import {
    asValue,
    AwilixContainer,
    createContainer,
    InjectionMode,
} from 'awilix';
import { Express } from 'express';

import apiLoader from './api';
import servicesLoader from './services';
import repositoriesLoader from './repositories';
import databaseLoader, { dataSource } from './database';
import loggerLoader from './logger';

dotenv.config();

type Options = {
    expressApp: Express;
};

export default async ({
    expressApp,
}: Options): Promise<{ container: AwilixContainer }> => {
    const container = createContainer({
        injectionMode: InjectionMode.PROXY,
    });

    const logger = loggerLoader({ container });

    const databaseActivity = logger.progress('Loading database...');
    await databaseLoader().catch((err) => {
        databaseActivity.fail('Database failed to load');
        logger.error(err);
        process.exit(1);
    });
    databaseActivity.succeed('Database loaded');

    container.register({
        ['manager']: asValue(dataSource.manager),
    });

    const repositoriesActivity = logger.progress('Loading repositories...');
    await repositoriesLoader({ container }).catch((err) => {
        repositoriesActivity.fail('Repositories failed to load');
        logger.error(err);
        process.exit(1);
    });
    repositoriesActivity.succeed('Repositories loaded');

    const servicesActivity = logger.progress('Loading services...');
    await servicesLoader({ container }).catch((err) => {
        servicesActivity.fail('Services failed to load');
        logger.error(err);
        process.exit(1);
    });
    servicesActivity.succeed('Services loaded');

    /**
     * Now that all is registered in the container
     * we can inject the container itself in the request
     */
    expressApp.use((req, _, next) => {
        (req as any).scope = container.createScope();
        next();
    });

    const apiActivity = logger.progress('Loading API...');
    await apiLoader({
        app: expressApp,
    }).catch((err) => {
        apiActivity.fail('API failed to load');
        logger.error(err);
        process.exit(1);
    });
    apiActivity.succeed('API loaded');

    return {
        container,
    };
};
