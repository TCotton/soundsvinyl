const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		default: '',
		trim: true
	},
	password: {
		type: String,
		default: '',
		trim: true
	}
});

export mongoose.model('User', UserSchema);
