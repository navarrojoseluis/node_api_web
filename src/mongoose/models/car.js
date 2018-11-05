'use strict'
const config = require('../../../config/config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CarSchema = new Schema(
    {
        name: { type: Schema.Types.String }
    },
    {
        timestamps: { createdAt: 'created_at' },
        collection: config.CARS_COLLECTION
    }
);
  
module.exports = mongoose.model('Car', CarSchema);
