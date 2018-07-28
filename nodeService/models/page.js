const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new require('./tags');

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
		maxlength: 2083,
	},
	categories: [tagSchema],
	userId: {
		type: mongoose.Schema.Types.ObjectId,
	},
	descriptionOne: {
		type: mongoose.Schema.Types.String,
		trim: true,
	},
	descriptionTwo: {
		type: mongoose.Schema.Types.String,
		trim: true,
	},
	descriptionThree: {
		type: mongoose.Schema.Types.String,
		trim: true,
	},
	date: {
		type: mongoose.Schema.Types.Date,
		default: Date.now,
	},
	updated: {
		type: mongoose.Schema.Types.Date,
	},
});

module.exports = mongoose.model('Page', PageSchema);
