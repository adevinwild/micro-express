import { NextFunction, Request, Response } from 'express';
import { MicroLogger } from '../../loaders/logger';

export default function () {
    return (req: Request, res: Response, next: NextFunction): void => {
        const logger: MicroLogger = req.scope.resolve('logger');

        const userContext = `${req.ip} - ${req.get('user-agent')}`;

        const fullUrl = `${req.protocol}://${req.get('host')}${
            req.originalUrl
        }`;

        const requestContext = `(${req.method}) ${fullUrl} [${res.statusCode}]`;
        const context = `${requestContext} ‖ ${userContext}`;

        logger.info(context);
        next();
    };
}
