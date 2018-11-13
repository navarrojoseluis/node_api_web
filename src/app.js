'use strict';
const conf = require('../config/config');

let express = require('express');
const cookieParser = require('cookie-parser');

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const routes = require('./api/routes'); 
routes(app);

const mongoose = require('mongoose');
mongoose.connect('mongodb://'+ conf.mongodb.host + ':' + conf.mongodb.port + '/' + conf.mongodb.db, { useNewUrlParser: true });

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
  
app.listen(conf.api.port, function () {
    console.log('Listening on port ' + conf.api.port);
});

module.exports = app;