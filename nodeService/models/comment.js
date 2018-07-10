const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	comment: {
		type: mongoose.Schema.Types.String,
		trim: true,
		maxlength: 24,
		required: true
	},
	articleId: {
		type: mongoose.Schema.Types.Oid,
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.Oid,
		required: true
	},
	date: {
		type: mongoose.Schema.Types.Date,
		default: Date.now
	},
	updated: {
		type: mongoose.Schema.Types.Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Comment', CommentSchema);
