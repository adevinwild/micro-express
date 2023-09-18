import { AwilixContainer } from 'awilix';
import { DataSource } from 'typeorm';
import { handlePostgresDatabaseError } from '../utils/database';
import dotenv from 'dotenv';

dotenv.config();

export let dataSource: DataSource;

type Options = {
    container: AwilixContainer;
};

export default async (_options: Options) => {
    dataSource = new DataSource({
        type: 'postgres',
        url: process.env.POSTGRES_URL,
        database: process.env.POSTGRES_DB,
        entities: ['src/models/*.ts'],
        migrations: ['src/migrations/*.ts'],
    });

    await dataSource.initialize().catch(handlePostgresDatabaseError);

    return dataSource;
};
