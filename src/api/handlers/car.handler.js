var CarController = require('../../controllers/car');

exports.createCar = function(req, res) {
    logger.debug('Creating new car...');
    let body = req.body;  
    if(!body || Object.keys(body).length === 0){
        let err = {
            message: 'Body must not be empty'
        };
        logger.error(err);
        return res.status(400).send(err);
    }

    let name = body['name'];

    logger.debug('Body: ' + JSON.stringify(body));
    CarController.createCar(name, function(car, err){
        if(err){
            return res.status(400).send(err);
        }
        logger.debug('New car created');
        return res.status(200).send(car);
    });
}; 

exports.getCar = function(req, res){
    logger.debug('Getting car...');
    let params = req.params;  
    if(!params || Object.keys(params).length === 0){
        let err = {
            message: 'Params must not be empty'
        };
        logger.error(err);
        return res.status(400).send(err);
    }

    let id = params['id'];

    CarController.getCar(id, function(cars, err){
        if(err){
            return res.status(400).send(err);
        }
        logger.debug(cars);
        return res.status(200).send(cars);
    });
}

exports.getCars = function(req, res){
    logger.debug('Getting cars...');
    CarController.getCars(function(cars, err){
        if(err){
            return res.status(400).send(err);
        }
        logger.error(cars);
        return res.status(200).send(cars);
    });
}

exports.updateCar = function(req, res){
    logger.debug('Updatting car...');
    let params = req.params;  
    if(!params || Object.keys(params).length === 0){
        let err = {
            message: 'Params must not be empty'
        };
        logger.error(err);
        return res.status(400).send(err);
    }

    let id = params['id'];

    let body = req.body;
    if(!body || Object.keys(body).length === 0){
        let err = {
            message: 'Body must not be empty'
        };
        logger.error(err);
        return res.status(400).send(err);
    }

    let name = body['name'];

    CarController.updateCar(id, name, function(cars, err){
        if(err){
            return res.status(400).send(err);
        }
        logger.debug(cars);
        return res.status(200).send(cars);
    });
}

exports.deleteCar = function(req, res) {
    logger.debug('Deleting car...');
    let params = req.params;  
    if(!params || Object.keys(params).length === 0){
        let err = {
            message: 'Params must not be empty'
        };
        logger.error(err);
        return res.status(400).send(err);
    }

    let id = params['id'];

    logger.debug('Car id: ' + id);
    CarController.deleteCar(id, function(car, err){
        if(err){
            return res.status(400).send(err);
        }
        logger.debug('Car deleted');
        return res.status(200).send(car);
    });
}; 