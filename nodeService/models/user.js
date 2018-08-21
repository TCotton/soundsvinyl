const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true,
		unique: true,
	},
	username: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true,
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
		default: Date.now,
	},
	updated: {
		type: mongoose.Schema.Types.Date,
		default: Date.now,
	},
	profile: {
		type: mongoose.Schema.Types.Date,
		default: Math.floor(Math.random() * 5 + 1),
		required: true
	}
});

module.exports = mongoose.model('User', UserSchema);
