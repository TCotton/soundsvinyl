const path = require('path');

try {

	const env = process.env.NODE_ENV.toLowerCase();
	global.__base = path.resolve(__dirname, '');

	switch (env) {
		case 'development':
			module.exports = require('./config/webpack.development');
			break;
		case 'production':
			module.exports = require('./config/webpack.production');
			break;
		case 'test':
			module.exports = require('./config/webpack.test');
			break;

	}

} catch (ex) {
	throw ex;
}
