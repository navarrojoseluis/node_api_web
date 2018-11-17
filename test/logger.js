process.env.NODE_ENV = 'test';

describe('Logger', () => {
    /*
     * Test debug level
     */
    describe('Test debug levels', () => {
        it('it should be debug level', (done) => {
            let testLevel = {
                "level": "debug"
            }
            let debubLogger = require('../src/utils/logger').getLogger(testLevel);
            debubLogger.level.should.be.eq('debug');
            done();
        });
        it('it should be info level', (done) => {
            let testLevel = {
                "level": "info"
            }
            let debubLogger = require('../src/utils/logger').getLogger(testLevel);
            debubLogger.level.should.be.eq('info');
            done();
        });
        it('it should be error level', (done) => {
            let testLevel = {
                "level": "error"
            }
            let debubLogger = require('../src/utils/logger').getLogger(testLevel);
            debubLogger.level.should.be.eq('error');
            done();
        });
        it('it should be crit level', (done) => {
            let testLevel = {
                "level": "crit"
            }
            let debubLogger = require('../src/utils/logger').getLogger(testLevel);
            debubLogger.level.should.be.eq('crit');
            done();
        });
    });
});