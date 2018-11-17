function getLogger(config) {
    'use strict';
    const winston = require('winston');

    const consoleFormat = winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp()
    );

    const customLevels = {
        levels: {
            crit: 0,
            error: 1,
            info: 2,
            debug: 3
        },
        colors: {
            crit: 'red',
            error: 'red',
            info: 'green',
            debug: 'blue'
        }
    };

    let logger = winston.createLogger({
        level: config.level,
        levels: customLevels.levels,
        transports: [
            new winston.transports.Console({
                level: config.level,
                format: consoleFormat,              
                colorize: true,
                timestamp: true
            })
        ]
    });
    return logger;
}

module.exports.getLogger = getLogger;
