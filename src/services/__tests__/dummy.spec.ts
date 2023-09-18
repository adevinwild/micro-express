import { Repository } from 'typeorm';
import DummyService from '../dummy';
import { Dummy } from '../../models/dummy';

const dummyRepository = {
    find: jest.fn().mockResolvedValue([
        {
            id: 'test',
        },
    ]),
} as unknown as Repository<Dummy>;

describe('DummyService', () => {
    it('should return the right dummy message', async () => {
        const service = new DummyService({ dummyRepository });

        const dummys = await service.retrieve();

        expect(dummys).toEqual([
            {
                id: 'test',
            },
        ]);
        expect(dummyRepository.find).toHaveBeenCalledTimes(1);
    });
});
