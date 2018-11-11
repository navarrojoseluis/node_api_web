let Car = require('../src/mongoose/models/car');
let conf = require('../config/config');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');
let should = chai.should();

chai.use(chaiHttp);

/**
 * Test cars
 */
describe('Cars', () => {
    /*
     * Test /POST create car route
     */
    describe('/POST car', () => {
        it('it should not POST a car without body', (done) => {
            let car = {};
            chai.request(app)
                .post(conf.CREATE_CAR_ROUTE)
                .send(car)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').eql('Body must not be empty');
                    done();
                });
        });
        it('it should not POST a car without name field', (done) => {
            let car = {
                field: 'field'
            };
            chai.request(app)
                .post(conf.CREATE_CAR_ROUTE)
                .send(car)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').eql('Attribute name not found');
                    done();
                });
        });
        it('it should POST a car', (done) => {
            let car = {
                name: 'carName'
            };
            chai.request(app)
                .post(conf.CREATE_CAR_ROUTE)
                .send(car)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    done();
                });
        });
    });

    /*
     * Test /GET get car route
     */
    describe('/GET/:id car', () => {
        it('it should not GET a car that not exist', (done) => {
            let fake_car_id = '000000000000000000000000';
            chai.request(app)
                .get('/car/' + fake_car_id)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Car with id ' + fake_car_id + ' not found');
                    done();
                });
        });
        it('it should GET a car', (done) => {
            let car = new Car({
                name: 'carToBeGetted'
            });
            car.save((err, car) => {
                chai.request(app)
                    .get('/car/' + car._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('_id');
                        res.body.should.have.property('name');
                        done();
                    });
            });
        });
    });

    /*
     * Test /GET get all cars route
     */
    describe('/GET cars', () => {
        it('it should GET all the cars', (done) => {
            chai.request(app)
                .get(conf.GET_CARS_ROUTE)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    // res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    /*
     * Test /DELETE car route
     */
    describe('/DELETE/:id car', () => {
        it('it should not DELETE a car that not exist', (done) => {
            let fake_car_id = '000000000000000000000000';
            chai.request(app)
                .delete('/car/' + fake_car_id)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Car with id ' + fake_car_id + ' not found');
                    done();
                });
        });
        it('it should DELETE a car', (done) => {
            let car = new Car({
                name: 'carToBeDeleted'
            });
            car.save((err, car) => {
                chai.request(app)
                    .delete('/car/' + car._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });

});