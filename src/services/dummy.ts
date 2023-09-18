import { Repository } from 'typeorm';
import { Dummy } from '../models/dummy';

type Container = {
    dummyRepository: Repository<Dummy>;
};

class DummyService {
    constructor(private readonly container: Container) {}

    public async retrieve(): Promise<Dummy[]> {
        const dummys = await this.container.dummyRepository.find();
        return dummys;
    }
}

export default DummyService;
