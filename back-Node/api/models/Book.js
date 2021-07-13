var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Kindly enter the name of the task']
    // required: [true, 'mess khi name de trong']
  },
 	num: {
 		type: Number,
 		require: [true, 'Kindly enter the age of the task']
     },
     pay: {type:String},
 	categorys: {type: Schema.Types.ObjectId, ref: 'Categorys'},
 	link:{type:String}
});
module.exports = mongoose.model('Books', BookSchema);