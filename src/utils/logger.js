function getLogger(config) {
    'use strict';
    const winston = require('winston');

    const env = process.env.NODE_ENV || 'development';
    
    const consoleFormat = winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp()       
    );

    let logger = winston.createLogger({
        level: env === 'development' ? 'debug' : 'info',
        transports: [
            new winston.transports.Console({
                level: config.level,
                format: consoleFormat,              
                colorize: true,
            })
        ]
    });    
    return logger;
}

module.exports.getLogger = getLogger;
