/*eslint no-undef:0*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true
	},
	subTitle: {
		type: String,
		trim: true,
	},
	videoLink: {
		type: String,
		trim: true,
		required: true,
		maxlength: 2083
	},
	categories: {
		type: Array,
	},
	userId: {
		type: ObjectId,
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

export default mongoose.model('Page', PageSchema);
