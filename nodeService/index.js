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
// const csp = require('helmet-csp')

process.env.NODE_ENV = 'production';

const db = mongoose.connect(mongoURI.productionURI);
// investigate why useNewUrlParser is important

const app = express();

if (app.get('env') === 'development') {
	mongoose.set('debug', true) // enable logging collection methods + arguments to the console
}

const prerenderToken = './config/prerender.js';

const prerender = require('prerender-node').set('prerenderToken', prerenderToken);
prerender.crawlerUserAgents.push('googlebot');
prerender.crawlerUserAgents.push('bingbot');
prerender.crawlerUserAgents.push('yandex');
prerender.crawlerUserAgents.push('baiduspider');
prerender.crawlerUserAgents.push('facebookexternalhit');
prerender.crawlerUserAgents.push('twitterbot');
prerender.crawlerUserAgents.push('rogerbot');
prerender.crawlerUserAgents.push('linkedinbot');
prerender.crawlerUserAgents.push('embedly');
prerender.crawlerUserAgents.push('bufferbot');
prerender.crawlerUserAgents.push('quora link preview');
prerender.crawlerUserAgents.push('showyoubot');
prerender.crawlerUserAgents.push('outbrain');
prerender.crawlerUserAgents.push('pinterest/0.');
prerender.crawlerUserAgents.push('developers.google.com/+/web/snippet');
prerender.crawlerUserAgents.push('www.google.com/webmasters/tools/richsnippets');
prerender.crawlerUserAgents.push('slackbot');
prerender.crawlerUserAgents.push('vkShare');
prerender.crawlerUserAgents.push('W3C_Validator');
prerender.crawlerUserAgents.push('redditbot');
prerender.crawlerUserAgents.push('Applebot');
prerender.crawlerUserAgents.push('WhatsApp');
prerender.crawlerUserAgents.push('flipboard');
prerender.crawlerUserAgents.push('tumblr');
prerender.crawlerUserAgents.push('bitlybot');
prerender.crawlerUserAgents.push('SkypeUriPreview');
prerender.crawlerUserAgents.push('nuzzel');
prerender.crawlerUserAgents.push('Discordbot');
prerender.crawlerUserAgents.push('Google Page Speed');
prerender.crawlerUserAgents.push('Qwantify');
app.use(prerender);

/**
 *  <meta http-equiv="Content-Security-Policy" content="default-src *; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *">
 */
/*app.use(csp({
	// Specify directives as normal.
	directives: {
		defaultSrc: [
			"'self'"
		],
		scriptSrc: [
			"'self'",
			"'unsafe-inline'",
			'https://cdn.polyfill.io/v2/polyfill.min.js',
			'https://www.google-analytics.com'
		],
		styleSrc: [
			'https://fonts.googleapis.com',
			'https://fonts.gstatic.com',
			"'self'",
			"'unsafe-inline'"
		],
		mediaSrc: [
			'https://all-resources.org.uk',
			'https://u2f3k8w8.stackpathcdn.com'
		],
		fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
		imgSrc: ["'self'", 'data:', 'www.google-analytics.com'],
		sandbox: ['allow-forms', 'allow-scripts'],
		reportUri: './report-violation',
		objectSrc: ["'none'"],
		upgradeInsecureRequests: true,
		workerSrc: false  // This is not set.
	},

	// This module will detect common mistakes in your directives and throw errors
	// if it finds any. To disable this, enable "loose mode".
	loose: false,

	// Set to true if you only want browsers to report errors, not block them.
	// You may also set this to a function(req, res) in order to decide dynamically
	// whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
	reportOnly: true,

	// Set to true if you want to blindly set all headers: Content-Security-Policy,
	// X-WebKit-CSP, and X-Content-Security-Policy.
	setAllHeaders: false,

	// Set to true if you want to disable CSP on Android where it can be buggy.
	disableAndroid: false,

	// Set to false if you want to completely disable any user-agent sniffing.
	// This may make the headers less compatible but it will be much faster.
	// This defaults to `true`.
	browserSniff: true
}))*/

app.set('view engine', 'bug');
app.use(express.static(__dirname + '/public'));

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

const htmlPath = path.join(__dirname, 'thumbnails');
console.dir(htmlPath);

app.use(express.static(htmlPath, options));

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

/**
 * redirect www to non-www domain
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function wwwRedirect (req, res, next) {
	if (req.headers.host.slice(0, 4) === 'www.') {
		let newHost = req.headers.host.slice(4);

		return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
	}
	next();
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

	app.use(wwwRedirect);

	app.use(express.static(global.__base + '/dist'));

	app.all('/*', (req, res, next) => {

		console.dir(app.get('env'));

		if (!req.url.includes('/apiV1/')) {
			res.sendFile(path.join(global.__base, '/src/index.html'));
		}

		if (req.url.includes('/apiV1/')) {
			next();
		}

	});

	// set the static files location /public/img will be /img for users

	// production error handler
	// no stacktraces leaked to user
	app.use((err, req, res, next) => {
		if (err) {
			res.statusCode = (err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			});
		} else {
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
require('./routes/comment')(app);

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

}

if (app.get('env') === 'production') {

	http.createServer(app).listen(app.get('port'), () => {
		console.log('Express server listening on port ' + app.get('port'));
	});

}

/* eslint-enable */
