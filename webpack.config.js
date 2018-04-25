const ENV = process.env.NODE_ENV;

console.dir(ENV);

global.__base = __dirname + '/';

switch (ENV) {
	case 'development':
		module.exports = require('./config/webpack.dev');
		break;
	case 'production':
		module.exports = require('./config/webpack.prod');
		break;
	default:
		module.exports = require('./config/webpack.dev');
		break;
}
