const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const tagSchema = require('./tags')

const PageSchema = new Schema({
	title: {
		type: mongoose.Schema.Types.String,
		trim: true,
		required: true,
		unique: true
	},
	subTitle: {
		type: mongoose.Schema.Types.String,
		trim: true
	},
	slug: {
		type: mongoose.Schema.Types.String,
		required: true,
		trim: true
	},
	shortSlug: {
		type: mongoose.Schema.Types.String,
		required: true,
		trim: true
	},
	videoLink: {
		type: mongoose.Schema.Types.String,
		trim: true,
		required: true,
		maxlength: 2083
	},
	categories: [tagSchema],
	userId: {
		type: mongoose.Schema.Types.ObjectId
	},
	descriptionOne: {
		type: mongoose.Schema.Types.String,
		required: true,
		trim: true
	},
	descriptionTwo: {
		type: mongoose.Schema.Types.String,
		trim: true
	},
	descriptionThree: {
		type: mongoose.Schema.Types.String,
		trim: true
	},
	descriptionFour: {
		type: mongoose.Schema.Types.String,
		trim: true
	},
	descriptionFive: {
		type: mongoose.Schema.Types.String,
		trim: true
	},
	date: {
		type: mongoose.Schema.Types.Date,
		default: Date.now,
		required: true
	},
	updated: {
		type: mongoose.Schema.Types.Date,
		default: Date.now
	}
})

PageSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Page', PageSchema)
