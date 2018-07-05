const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	comment: {
		type: String,
		trim: true,
		maxlength: 24,
		required: true
	},
	articleId: {
		type: ObjectId,
		required: true
	},
	userId: {
		type: ObjectId,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date,
		default: Date.now
	},
});

export default mongoose.model('Comment', CommentSchema);
