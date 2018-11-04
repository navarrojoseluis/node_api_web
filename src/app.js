'use strict';

let express = require('express');
const cookieParser = require('cookie-parser');

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const routes = require('./api/routes'); 
routes(app);

const mongoose = require('mongoose');
mongoose.connect('mongodb://10.10.0.3:27017/admin', { useNewUrlParser: true });

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
  
app.listen(3000, function () {
    console.log('Listening on port 3000');
});