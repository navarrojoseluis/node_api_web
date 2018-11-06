'use strict';
let conf = require('../../config/config');

module.exports = function(app) {
    var CarHandler = require('./handlers/car.handler');

    app.post(conf.CREATE_CAR_ROUTE, CarHandler.createCar);
};