import { Repository } from 'typeorm';
import { Dummy } from '../../models/dummy';
import DummyService from '../dummy';

const fixtureList = [
    {
        id: 'test',
    },
];

const dummyRepository = {
    find: jest.fn().mockResolvedValue(fixtureList),
    findOneOrFail: jest.fn().mockResolvedValue(fixtureList[0]),
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(fixtureList[0]),
} as unknown as Repository<Dummy>;

describe('DummyService', () => {
    it('should return the right list of dummies', async () => {
        const service = new DummyService({ dummyRepository });
        const dummys = await service.list();

        expect(dummyRepository.find).toHaveBeenCalledTimes(1);
        expect(dummys).toEqual(fixtureList);
    });

    it('should create a dummy', async () => {
        const service = new DummyService({ dummyRepository });
        const dummy = await service.create();

        expect(dummyRepository.create).toHaveBeenCalledTimes(1);
        expect(dummyRepository.save).toHaveBeenCalledTimes(1);
        expect(dummy).toEqual(fixtureList[0]);
    });

    it('should retrieve a dummy', async () => {
        const service = new DummyService({ dummyRepository });
        const dummy = await service.retrieve('test');

        expect(dummyRepository.findOneOrFail).toHaveBeenCalledTimes(1);
        expect(dummy).toEqual(fixtureList[0]);
    });
});
