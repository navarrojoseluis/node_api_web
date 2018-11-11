'use strict'
const CONFIG = {};

// API configuration
CONFIG.API_PORT = 3000;

// API routes
CONFIG.CREATE_CAR_ROUTE = '/car';
CONFIG.GET_CAR_ROUTE = '/car/:id';
CONFIG.GET_CARS_ROUTE = '/car';
CONFIG.DELETE_CARS_ROUTE = '/car/:id';

// Database configuration
CONFIG.DB_HOST = '10.10.0.3';
CONFIG.DB_PORT = '27017';
CONFIG.DB_NAME = 'admin';

// Database collections
CONFIG.CARS_COLLECTION = 'cars';

module.exports = CONFIG;
