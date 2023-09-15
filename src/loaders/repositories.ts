import { AwilixContainer, asClass } from 'awilix';
import { sync } from 'glob';
import path from 'path';

type Options = {
    container: AwilixContainer;
};

export default async ({ container }: Options) => {
    const servicesPath = '../repositories/*.js';
    const pathFull = path.join(__dirname, servicesPath);

    const files = sync(pathFull, { cwd: __dirname });

    files.forEach((file) => {
        const service = require(file).default;
        if (service) {
            const name = file.split('/').pop()?.split('.')[0];
            const serviceName = `${name}Repository`;

            container.register({
                [serviceName]: asClass(service),
            });
        }
    });
};
