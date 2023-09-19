import { Router } from 'express';
import createDummy from './create-dummy';
import listDummies from './list-dummies';
import retrieveDummy from './retrieve-dummy';

const route = Router();

export default (app: Router): Router => {
    app.use('/dummy', route);

    route.get('/', listDummies);
    route.get('/:id', retrieveDummy);
    route.post('/', createDummy);

    return app;
};
