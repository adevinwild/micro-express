import DummyService from '../dummy';

describe('DummyService', () => {
    it('should return the right dummy message', () => {
        const service = new DummyService();

        expect(service.retrieve()).toBe('Hello Dummy World!');
    });
});
