const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
// const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
// const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser'); // this is causing server to fail
const logger = require('morgan');
const compress = require('compression');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/soundsvinyl', {
	useNewUrlParser: true
});

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

app.use(express.static(path.join(global.__base, 'public')));

app.use((req, res, next) => {
	req.db = db;
	next();
});

app.get('/', function (req, res) {
	res.send('Hello World!');
});

if (app.get('env') === 'development') {

	// app.use(express.static(__dirname + '/src'));

	app.all('/', function (req, res, next) {

		console.dir('development');

		console.dir(req.url);

		if (!req.url.includes('/apiV1/')) {
			res.sendFile(path.join(global.__base, '/src/index.html'));
		}

		if (req.url.includes('/apiV1/')) {
			next();
		}

	});
}

// routes based category
require('./routes')(app);
require('./routes/page')(app);

// miscellaneous routes based on use
require('./misc/logger');

module.exports = app;

// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development

	if (!res.locals) {
		res.locals = {};
	}

	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// catch 404 and forward to error handler
/*
app.use((req, res, next) => {
	next(createError(404));
});
*/

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
