import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.POSTGRES_URL,
    database: process.env.POSTGRES_DB,
    entities: ['src/models/*.ts'],
    migrations: ['src/migrations/*.ts'],
});
