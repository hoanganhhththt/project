var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PaySchema = new Schema({
    _idAuther: Schema.Types.ObjectId,
    idBook:String,
    nameCustom: String,
    bookName:String,
    phone: Number,
    address: String,
    count: Number,
    pay: String
});
module.exports = mongoose.model('Pay', PaySchema);