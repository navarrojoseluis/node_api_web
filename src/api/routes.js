// var express = require('express');
// var router = express.Router();

// var CarHandler = require('./handlers/car.handler');

// router.post('/car/create', CarHandler.createCar);

'use strict';
module.exports = function(app) {
    var CarHandler = require('./handlers/car.handler');

    app.post('/car/create', CarHandler.createCar);
};