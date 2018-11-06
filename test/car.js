let conf = require('../config/config');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');
let should = chai.should();

chai.use(chaiHttp);

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
            field : 'field'
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
            name : 'car_name'
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
 * Test /GET get all cars route
 */
describe('/GET cars', () => {
    it('it should GET all the cars', (done) => {
        chai.request(app)
            .get(conf.GET_CARS_ROUTE)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });   
});