'use strict';
// Load environment config
global.conf = require('../config/config');
// Setup logger
global.logger = require('./utils/logger').getLogger(conf.logger);

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// API Routes
const routes = require('./api/routes'); 
routes(app);

// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://'+ conf.mongodb.host + ':' + conf.mongodb.port + '/' + conf.mongodb.db, { useNewUrlParser: true });

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
  
app.listen(conf.api.port, function () {
    console.log('Listening on port ' + conf.api.port);
});

module.exports = app;