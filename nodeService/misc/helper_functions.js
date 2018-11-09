const crypto = require('crypto');

module.exports = {
	createPasswordHash: function(password) {
		const hmac = crypto.createHmac('sha512', process.env.salt);
		// change to 'binary' if you want a binary digest
		hmac.setEncoding('hex');
		// write in the text that you want the hmac digest for
		hmac.write(password);
		// you can't read from the stream until you call end()
		hmac.end();
		// read out hmac digest
		return hmac.read();
	}
};
