const Car = require('../mongoose/models/car');

exports.createCar = function(name, callback) {
    'use strict';
    if(name === null || name === undefined){
        let err = 'Attribute name not found';
        console.debug(err);
        return callback(null, err);
    }

    let carAttributes = {};
    carAttributes['name'] = name;

    let new_car = new Car(carAttributes);
    console.debug('New car: ' + new_car);
    new_car.save(function(err, car) {
        if (err){
            return callback(null, err);            
        }
        return callback(car);       
    });
};