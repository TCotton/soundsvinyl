const path = require('path');

try {
	global.__base = path.resolve(__dirname, '');
	require('./nodeService/');
} catch (ex) {
	throw ex;
}
