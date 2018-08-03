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
// const favicon = require('serve-favicon');
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

/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

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

// app.use(express.static(path.join(global.__base, 'public')));

app.use((req, res, next) => {
	req.db = db;
	next();
});

app.use(/admin/, function (req, res, next) {
	console.log('Request Type:', req.method)
	next();
})

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

app.use(/admin/, function (req, res, next) {
	console.log('Request URL:', req.originalUrl)
	next()
}, function (req, res, next) {
	console.log('Request Type:', req.method)
	next()
})


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

// error handler
/*app.use((err, req, res) => {
	// set locals, only providing error in development

	if (!res.locals) {
		res.locals = {};
	}

	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page

	if (!err.status) {
		err.status = 500;
	}
	req.status(err.status);
	req.render('error');
});*/

// catch 404 and forward to error handler
/*app.use((req, res, next) => {
	next(createError(404));
});*/

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
