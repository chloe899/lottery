'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    ModelSchema;



ModelSchema = new Schema({
    name:String,
    amount:Date,
    created_at:Date,
    last_login:Date
});
//{victory,draw，lost}
module.exports = mongoose.model('User', ModelSchema, "users");