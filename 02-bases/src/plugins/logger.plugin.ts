import winston, {format} from "winston";

const { combine, timestamp, label, printf } = format;

// sirve para crear un logger, guarda los logs en un archivo

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});


// sirve para mostrar los logs en la consola
logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

// factory function
export const buildLogger = (service:string) => {
    return {
        log: (message:string) => {
            logger.log("info", {message, service});
        },
        error: (message:string) => {
            logger.log("error", {message, service});
        }
    }
}
    