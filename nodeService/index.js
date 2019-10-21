/* eslint-disable */
// temp turn off eslint rules
// there's too much churn
const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
// const createError = require('http-errors');
const path = require('path')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser') // this is causing server to fail
const logger = require('morgan')
const compress = require('compression')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const csp = require('helmet-csp')
const spdy = require('spdy');

if (fs.existsSync('./node-variables.env')) {
	const dotenv = require('dotenv')
	const result = dotenv.config({ path: './node-variables.env' })
	if (result.error) {
		throw result.error
	}
}
const db = mongoose.connect(process.env.mongoProductionURI)
// investigate why useNewUrlParser is important

const app = express()

if (app.get('env') === 'development') {
	mongoose.set('debug', true) // enable logging collection methods + arguments to the console
}

let limiter

if (app.get('env') === 'production') {
	limiter = rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100 // limit each IP to 100 requests per windowMs
	})
}

const prerenderToken = process.env.prerenderToken

const prerender = require('prerender-node').set(
	'prerenderToken',
	prerenderToken
)
prerender.crawlerUserAgents.push('googlebot')
prerender.crawlerUserAgents.push('bingbot')
prerender.crawlerUserAgents.push('yandex')
prerender.crawlerUserAgents.push('baiduspider')
prerender.crawlerUserAgents.push('facebookexternalhit')
prerender.crawlerUserAgents.push('twitterbot')
prerender.crawlerUserAgents.push('rogerbot')
prerender.crawlerUserAgents.push('linkedinbot')
prerender.crawlerUserAgents.push('embedly')
prerender.crawlerUserAgents.push('bufferbot')
prerender.crawlerUserAgents.push('quora link preview')
prerender.crawlerUserAgents.push('showyoubot')
prerender.crawlerUserAgents.push('outbrain')
prerender.crawlerUserAgents.push('pinterest/0.')
prerender.crawlerUserAgents.push('developers.google.com/+/web/snippet')
prerender.crawlerUserAgents.push('www.google.com/webmasters/tools/richsnippets')
prerender.crawlerUserAgents.push('slackbot')
prerender.crawlerUserAgents.push('vkShare')
prerender.crawlerUserAgents.push('W3C_Validator')
prerender.crawlerUserAgents.push('redditbot')
prerender.crawlerUserAgents.push('Applebot')
prerender.crawlerUserAgents.push('WhatsApp')
prerender.crawlerUserAgents.push('flipboard')
prerender.crawlerUserAgents.push('tumblr')
prerender.crawlerUserAgents.push('bitlybot')
prerender.crawlerUserAgents.push('SkypeUriPreview')
prerender.crawlerUserAgents.push('nuzzel')
prerender.crawlerUserAgents.push('Discordbot')
prerender.crawlerUserAgents.push('Google Page Speed')
prerender.crawlerUserAgents.push('Qwantify')
app.use(prerender)

app.set('view engine', 'bug')
app.use(express.static(__dirname + '/public'))

app.set('port', process.env.PORT || 8443)

app.use(cookieParser())
app.use(logger('dev'))
app.use(compress())
app.use(
	bodyParser.urlencoded({
		extended: true
	})
)
app.use(bodyParser.json())
app.use(
	express.urlencoded({
		extended: false
	})
)
app.use(helmet())

//  apply to all requests
if (app.get('env') === 'production') {
	app.use(limiter)
}

app.use(
	csp({
		// Specify directives as normal.
		directives: {
			defaultSrc: ["'self'", 'soundsvinyl.co', "'unsafe-inline'"],
			scriptSrc: [
				"'self'",
				"'unsafe-inline'",
				'cdn.polyfill.io',
				'tagmanager.google.com',
				'googletagmanager.com',
				'google-analytics.com',
				'cdn.polyfill.io'
			],
			styleSrc: [
				"'self'",
				"'unsafe-inline'",
				'fonts.gstatic.com',
				'tagmanager.google.com',
				'fonts.googleapis.com'
			],
			fontSrc: ["'self'", 'fonts.gstatic.com'],
			imgSrc: [
				"'unsafe-inline'",
				'data:',
				'ssl.gstatic.com',
				'google-analytics.com',
				'google-analytics.com',
				'stats.g.doubleclick.net'
			],
			sandbox: ['allow-forms', 'allow-scripts'],
			connectSrc: ['google-analytics.com', 'stats.g.doubleclick.net'],
			reportUri: '/report-violation',
			objectSrc: ["'none'"],
			upgradeInsecureRequests: true,
			workerSrc: false // This is not set.
		},

		// This module will detect common mistakes in your directives and throw errors
		// if it finds any. To disable this, enable "loose mode".
		loose: true,

		// Set to true if you only want browsers to report errors, not block them.
		// You may also set this to a function(req, res) in order to decide dynamically
		// whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
		reportOnly: true,

		// Set to true if you want to blindly set all headers: Content-Security-Policy,
		// X-WebKit-CSP, and X-Content-Security-Policy.
		setAllHeaders: false,

		// Set to true if you want to disable CSP on Android where it can be buggy.
		disableAndroid: true,

		// Set to false if you want to completely disable any user-agent sniffing.
		// This may make the headers less compatible but it will be much faster.
		// This defaults to `true`.
		browserSniff: true
	})
)

app.all('*', function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
	next()
})

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

const htmlPath = path.join(__dirname, 'thumbnails')
app.use(express.static(htmlPath, options))
app.use(favicon(path.join(__dirname, 'files', 'favicon.ico')))

app.use((req, res, next) => {
	req.db = db
	next()
})

if (app.get('env') !== 'test') {
	require('./routes/sitemap')(app)
}

if (app.get('env') === 'development') {
	app.all('/', (req, res, next) => {
		if (!req.url.includes('/apiV1/')) {
			res.sendFile(path.join(global.__base, '/src/index.html'))
		}

		if (req.url.includes('/apiV1/')) {
			next()
		}
	})
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
		let newHost = req.headers.host.slice(4)

		return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl)
	}
	next()
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {
	app.set('trust proxy', true)
	app.use(wwwRedirect)

	//  apply to all requests
	app.use(limiter)

	app.use(express.static(global.__base + '/dist'))

	app.get('/robots.txt', (req, res) => {
		res.sendFile(path.join(global.__base, '/dist/robots.txt'))
	})

	app.all('/*', (req, res, next) => {
		if (!req.url.includes('/apiV1/')) {
			res.sendFile(path.join(global.__base, '/dist/index.html'))
		}

		if (req.url.includes('/apiV1/')) {
			next()
		}
	})

	// set the static files location /public/img will be /img for users

	// production error handler
	// no stacktraces leaked to user
	app.use((err, req, res, next) => {
		if (err) {
			res.statusCode = err.status || 500
			res.render('error', {
				message: err.message,
				error: err
			})
		} else {
			next()
		}
	})
}

if (app.get('env') === 'production') {
	app.use(helmet());
	app.enable('trust proxy') // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
	require('./misc/compression')(app)
}

// routes based category
require('./routes')(app)
require('./routes/page')(app)
require('./routes/user')(app)
require('./routes/comment')(app)
require('./routes/contact')(app)

module.exports = app

if (
	app.get('env') === 'development' &&
	fs.existsSync(`${__dirname}/config/server.key`) &&
	fs.existsSync(`${__dirname}/config/server.crt`)
) {
	const httpsOptions = {
		key: fs.readFileSync(`${__dirname}/config/server.key`),
		cert: fs.readFileSync(`${__dirname}/config/server.crt`)
	}

	https.createServer(httpsOptions, app).listen(app.get('port'), () => {
		console.log('server running at ' + app.get('port'))
	})
}

if (app.get('env') === 'production') {
	http.createServer(app).listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port'));
	});
}

/* eslint-enable */
