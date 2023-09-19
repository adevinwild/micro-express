import { AwilixContainer, asValue } from 'awilix';
import winston from 'winston';
import ora from 'ora';

type Options = {
    container: AwilixContainer;
};

type ProgressActions = {
    succeed: (message: string) => void;
    fail: (message: string) => void;
};

export class MicroLogger {
    constructor(private logger: winston.Logger) {}

    info(message: string): void {
        this.logger.info(message);
    }

    error(message: string): void {
        this.logger.error(message);
    }

    warn(message: string): void {
        this.logger.warn(message);
    }

    progress(message: string): ProgressActions {
        const spinner = ora(message).start();
        return {
            succeed: (message: string): void => {
                spinner.succeed(message);
            },
            fail: (message: string): void => {
                spinner.fail(message);
            },
        };
    }
}

export default ({ container }: Options): MicroLogger => {
    const logger = winston.createLogger({
        level: 'silly',
        levels: winston.config.npm.levels,
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.errors({ stack: true }),
            winston.format.splat(),
            winston.format.json(),
        ),
    });

    // If we're not in production then log to the `console`
    if (process.env.NODE_ENV !== 'production') {
        logger.add(
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple(),
                ),
            }),
        );
    } else {
        logger.add(
            new winston.transports.File({
                filename: 'logs/error.log',
                level: 'error',
            }),
        );
        logger.add(
            new winston.transports.File({
                filename: 'logs/combined.log',
            }),
        );
    }

    const loggerInstance = new MicroLogger(logger);

    container.register({
        logger: asValue(loggerInstance),
    });

    return loggerInstance;
};
