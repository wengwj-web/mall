var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var produtSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "salePrice":String,
  "checked":String,
  "productNum":Number,
  "productImage":String
});

module.exports = mongoose.model('Good',produtSchema);
