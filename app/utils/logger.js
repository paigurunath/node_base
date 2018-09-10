var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston
            .transports
            .File({
                name: 'common-file',
                level: 'info',
                filename: './logs/all-logs.log',
                handleExceptions: true,
                json: false,
                maxsize: 5242880, //5MB
                maxFiles: 5,
                colorize: false
            }),
        new winston
            .transports
            .File({
                name: 'error-file',
                filename: './logs/filelog-error.log',
                level: 'error',
                handleExceptions: true,
                json: false,
                maxsize: 5242880, //5MB
                maxFiles: 5,
                colorize: false
            }),
        new winston
            .transports
            .Console({level: 'debug', handleExceptions: true, json: false, colorize: true})
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};
