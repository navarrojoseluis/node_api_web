'use strict';

module.exports = function (app) {
    var CarHandler = require('./handlers/car.handler');

    app.post(conf.apiroutes.createcar, CarHandler.createCar);
    app.get(conf.apiroutes.getcar, CarHandler.getCar);
    app.get(conf.apiroutes.getcars, CarHandler.getCars);
    app.put(conf.apiroutes.updatecar, CarHandler.updateCar);
    app.delete(conf.apiroutes.deletecar, CarHandler.deleteCar);

};