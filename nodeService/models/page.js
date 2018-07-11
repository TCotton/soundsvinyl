const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose.Schema.Types.Oid
const PageSchema = new Schema({
	title: {
		type: mongoose.Schema.Types.String,
		trim: true,
		required: true
	},
	subTitle: {
		type: mongoose.Schema.Types.String,
		trim: true,
	},
	videoLink: {
		type: mongoose.Schema.Types.String,
		trim: true,
		required: true,
		maxlength: 2083
	},
	categories: {
		type: mongoose.Schema.Types.Array,
	},
	userId: {
		type: mongoose.Schema.Types.String,
	},
	addPageDescriptionOne: {
		type: mongoose.Schema.Types.String,
		trim: true
	},
	addPageDescriptionTwo: {
		type: mongoose.Schema.Types.String,
		trim: true
	},
	addPageDescriptionThree: {
		type: mongoose.Schema.Types.String,
		trim: true
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

module.exports = mongoose.model('Page', PageSchema);
