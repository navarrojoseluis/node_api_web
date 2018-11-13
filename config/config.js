'use strict'
let defaultEnvironmentSettings = {
    mongodb: {
        host: '10.10.0.3',
        port: '27017',
        db: 'admin'
    },
    mongodbcollections: {
        carscollection: 'cars'
    },
    api: {
        port: '3000'
    },
    apiroutes: {
        createcar: '/car',
        getcar: '/car/:id',
        getcars: '/car',
        updatecar: '/car/:id',
        deletecar: '/car/:id'
    }
};

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
