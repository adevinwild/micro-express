import { AwilixContainer } from 'awilix';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface Request {
            scope: AwilixContainer;
        }
    }
}

export type ClassConstructor<T> = {
    new (...args: unknown[]): T;
};
