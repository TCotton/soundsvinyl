const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true,
		unique: true,
		max: 254,
	},
	username: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true,
		unique: true,
		max: 254,
	},
	password: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true
	},
	userLevel: {
		type: mongoose.Schema.Types.Number,
		default: 2,
		required: true
	},
	date: {
		type: mongoose.Schema.Types.Date,
	},
	updated: {
		type: mongoose.Schema.Types.Date,
	},
});

module.exports = mongoose.model('User', UserSchema);
