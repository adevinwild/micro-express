import dotenv from 'dotenv';
import path from 'path';
import { DataSourceOptions } from 'typeorm';

dotenv.config();

const config: DataSourceOptions = {
    type: 'postgres',
    url: process.env.POSTGRES_URL,
    database: process.env.POSTGRES_DB,
    entities: [path.join(__dirname, '..', 'models', '*.{ts,js}')],
    migrations: [path.join(__dirname, '..', 'migrations', '*.{ts,js}')],
};

export default config;
