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

exports.getCar = function(id, callback) {
    if(id === null || id === undefined){
        let err = {
            message: 'Param id not found'
        }
        console.debug(err);
        return callback(null, err);
    }
    Car.findById(id, function(err, car) {
        if (err){
          return callback(null, err);
        }
        if (car === null){
            let err = {
                message: 'Car with id ' + id + ' not found'
            }
            return callback(null, err);
        }
        return callback(car);
    });    
};

exports.getCars = function(callback) {
    Car.find({}, function(err, car) {
        if (err){
          return callback(null, err);
        }
        return callback(car);
    });    
};

exports.deleteCar = function(id, callback) {
    if(id === null || id === undefined){
        let err = {
            message: 'Param id not found'
        }
        console.debug(err);
        return callback(null, err);
    }
    Car.findOneAndDelete({ _id: id }, function(err, car) {
        if (err){
            return callback(null, err);
        }
        console.debug(car);
        if (car === null){
            let err = {
                message: 'Car with id ' + id + ' not found'
            }
            return callback(null, err);
        }
        return callback(car);
    });    
};