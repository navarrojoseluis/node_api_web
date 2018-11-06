'use strict';
const Car = require('../mongoose/models/car');

exports.createCar = function(name, callback) {    
    if(name === null || name === undefined){
        let err = {
            message: 'Attribute name not found'
        }
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

exports.getCars = function(callback) {
    Car.find({}, function(err, car) {
        if (err){
          return callback.send(err);
        }
        return callback(car);
    });    
};