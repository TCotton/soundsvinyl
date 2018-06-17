const path = require('path');

try {

	const env = process.env.NODE_ENV;
	global.__base = path.resolve(__dirname, '/');

	switch (env) {
		case 'development':
			module.exports = require('./config/webpack.development');
			break;
		case 'production':
			module.exports = require('./config/webpack.production');
			break;
		case undefined || 'undefined':
			return Error('No environment has been set');
	}

} catch (ex) {
	throw ex;
}
