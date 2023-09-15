import { Request, Response } from 'express';
import type DummyService from '../../../services/dummy';

export default async (req: Request, res: Response) => {
    const dummyService: DummyService = req.scope.resolve('dummyService');
    const message = dummyService.retrieve();
    res.status(200).json({ message });
};
