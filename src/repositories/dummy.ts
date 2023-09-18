import { dataSource } from '../loaders/database';
import { Dummy } from '../models/dummy';

export const DummyRepository = dataSource.getRepository(Dummy);
export default DummyRepository;
