import { AwilixContainer } from 'awilix';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import dataSourceOptions from '../config/ormconfig';
import { handlePostgresDatabaseError } from '../utils/database';

dotenv.config();

export let dataSource: DataSource;

type Options = {
    container: AwilixContainer;
};

export default async (_options: Options) => {
    dataSource = new DataSource(dataSourceOptions);

    await dataSource.initialize().catch(handlePostgresDatabaseError);

    return dataSource;
};
