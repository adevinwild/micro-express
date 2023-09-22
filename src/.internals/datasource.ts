import { DataSource } from 'typeorm';
import config from './ormconfig';

/**
 * ? Used for TypeORM migrations only.
 */
const dataSource = new DataSource(config);

export default dataSource;
