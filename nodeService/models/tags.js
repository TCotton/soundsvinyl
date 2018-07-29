const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
	name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
});

module.exports = TagsSchema;
