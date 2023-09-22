import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import dataSourceOptions from '../.internals/ormconfig';
import { handlePostgresDatabaseError } from '../utils/database';

dotenv.config();

export let dataSource: DataSource;

export default async (): Promise<DataSource> => {
    dataSource = new DataSource(dataSourceOptions);

    await dataSource.initialize().catch(handlePostgresDatabaseError);

    return dataSource;
};
