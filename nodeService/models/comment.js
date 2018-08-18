const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: {
		type: mongoose.Schema.Types.String,
		trim: true,
		maxlength: 500,
		required: true,
	},
	articleId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	userName: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	date: {
		type: mongoose.Schema.Types.Date,
		default: Date.now,
	},
	published: {
		type: mongoose.Schema.Types.Boolean,
		default: false,
	}
});

module.exports = mongoose.model('Comment', CommentSchema);
