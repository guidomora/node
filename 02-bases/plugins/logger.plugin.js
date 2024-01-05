const winston = require('winston');

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
module.exports = function buildLogger(service) {
    return {
        log: (message) => {
            logger.log("info", {message, service});
        }
    }
}
    