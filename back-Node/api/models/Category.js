var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CategorySchema = new Schema({
	_idCategory: Schema.Types.ObjectId,
	name: {type:String},
	books: [{ type: Schema.Types.ObjectId, ref: 'Books'}]
});
module.exports = mongoose.model('Categorys', CategorySchema);