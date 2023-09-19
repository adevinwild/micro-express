import { Request, Response } from 'express';
import type DummyService from '../../../services/dummy';

export default async (req: Request, res: Response): Promise<void> => {
    const dummyService: DummyService = req.scope.resolve('dummyService');

    const dummys = await dummyService.list();
    res.status(200).json({ dummys });
};
