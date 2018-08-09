/* eslint-disable */
// temp turn off eslint rules
// there's too much churn
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
// const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser'); // this is causing server to fail
const logger = require('morgan');
const compress = require('compression');
const mongoose = require('mongoose');
const mongoURI = require('./config/mongoDB');

const db = mongoose.connect(mongoURI.productionURI);
// investigate why useNewUrlParser is important

const app = express();

if (app.get('env') === 'development') {
	mongoose.set('debug', true) // enable logging collection methods + arguments to the console
}

app.set('port', process.env.PORT || 8443);

app.use(cookieParser())
app.use(logger('dev'));
app.use(compress());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({
	extended: false
}));

const options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['png', 'jpeg', 'jpeg'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now())
	}
}

app.use(express.static(path.join(__dirname, 'thumbnails'), options));

app.use(favicon(path.join(__dirname, 'files', 'favicon.ico')));

app.use((req, res, next) => {
	req.db = db;
	next();
});

if (app.get('env') === 'development') {

	app.all('/', (req, res, next) => {

		if (!req.url.includes('/apiV1/')) {
			res.sendFile(path.join(global.__base, '/src/index.html'));
		}

		if (req.url.includes('/apiV1/')) {
			next();
		}

	});
}

if (app.get('env') === 'production') {
	require('./misc/security')(app);
}

// routes based category
require('./routes')(app);
require('./routes/page')(app);
require('./routes/user')(app);

// miscellaneous routes based on use
require('./misc/logger');

module.exports = app;

if (app.get('env') === 'development' &&
	fs.existsSync(`${__dirname}/config/server.key`) &&
	fs.existsSync(`${__dirname}/config/server.crt`)) {

	const httpsOptions = {
		key: fs.readFileSync(`${__dirname}/config/server.key`),
		cert: fs.readFileSync(`${__dirname}/config/server.crt`)
	}

	https.createServer(httpsOptions, app).listen(app.get('port'), () => {
		console.log('server running at ' + app.get('port'));
	});

} else {

	http.createServer(app).listen(app.get('port'), () => {
		console.log('Express server listening on port ' + app.get('port'));
	});

}

/* eslint-enable */
