let defaultEnvironmentSettings = require('./config/default.json');

function loadEnvironmentSettings() {
    'use strict';
    let environment = process.env.NODE_ENV || 'development';
    let environmentSettings = {};
    try {
        environmentSettings = require('./config/' + environment + '.json');
    } catch (err) {
        throw new Error('Cannot load ' + environment + '.json settings file.');
    }
    return environmentSettings;
}

module.exports = Object.assign(defaultEnvironmentSettings, loadEnvironmentSettings());
