var CarController = require('../../controllers/car');

exports.createCar = function(req, res) {
    console.debug('Creating new car...');
    let body = req.body;  
    if(!body || Object.keys(body).length === 0){
        let err = {
            message: 'Body must not be empty'
        };
        console.debug(err);
        return res.status(400).send(err);
    }

    let name = body['name'];

    console.debug('Body: ' + JSON.stringify(body));
    CarController.createCar(name, function(car, err){
        if(err){
            return res.status(400).send(err);
        }
        console.debug('New car created');
        return res.status(200).send(car);
    });
}; 

exports.getCars = function(req, res){
    console.debug('Getting cars...');
    CarController.getCars(function(cars, err){
        if(err){
            return res.status(400).send(err);
        }
        console.debug(cars);
        return res.status(200).send(cars);
    });
}