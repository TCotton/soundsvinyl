const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: mongoose.Schema.Types.String,
		default: '',
		trim: true,
		required: true
	},
	password: {
		type: mongoose.Schema.Types.String,
		default: '',
		trim: true,
		required: true
	},
	date: {
		type: mongoose.Schema.Types.Date,
		default: Date.now
	},
});

module.exports = mongoose.model('User', UserSchema);


