const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		default: '',
		trim: true,
		required: true
	},
	password: {
		type: String,
		default: '',
		trim: true,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

export default mongoose.model('User', UserSchema);


