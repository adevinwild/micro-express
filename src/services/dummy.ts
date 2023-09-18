import { Repository } from 'typeorm';
import crypto from 'crypto';
import { Dummy } from '../models/dummy';

type Container = {
    dummyRepository: Repository<Dummy>;
};

class DummyService {
    constructor(private readonly container: Container) {}

    public async list(): Promise<Dummy[]> {
        const dummys = await this.container.dummyRepository.find();

        console.log('dummys', dummys);

        return dummys;
    }

    public async create(): Promise<Dummy> {
        const dummyToSave = this.container.dummyRepository.create({
            id: crypto.randomBytes(16).toString('hex'),
        });

        return await this.container.dummyRepository.save(dummyToSave);
    }

    public async retrieve(id: string): Promise<Dummy> {
        const dummy = await this.container.dummyRepository.findOneOrFail({
            where: { id },
        });
        return dummy;
    }
}

export default DummyService;
