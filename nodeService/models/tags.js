const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagsSchema = new Schema({
	name: {
		type: mongoose.Schema.Types.String,
		required: true
	},
	date: {
		type: mongoose.Schema.Types.Date,
		default: Date.now,
		required: true
	}
})

module.exports = TagsSchema
