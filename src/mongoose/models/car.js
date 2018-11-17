'use strict'
const conf = require('../../../config/config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CarSchema = new Schema(
    {
        name: { type: Schema.Types.String }
    },
    {
        timestamps: { createdAt: 'created_at' },
        collection: conf.mongodbcollections.carscollection
    }
);
  
module.exports = mongoose.model('Car', CarSchema);
