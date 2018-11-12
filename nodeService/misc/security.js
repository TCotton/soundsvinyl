const RateLimit = require('express-rate-limit');
const {RateLimiterMemory} = require('rate-limiter-flexible');

module.exports = (app) => {

	// security advice used from https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d
	// do I need both express-rate-limit && rate-limiter-flexible??

	app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

	const apiLimiter = new RateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100,
		delayMs: 0 // disabled
	});

	// only apply to requests that begin with /apiV1/
	app.use('/apiV1/', apiLimiter);

	const opts = {
		points: 5, // 5 points
		duration: 1, // Per second
		blockDuration: 300, // block for 5 minutes if more than points consumed
	};

	const rateLimiter = new RateLimiterMemory(opts);

	const rateLimiterMiddleware = (req, res, next) => {
		// Consume 1 point for each request
		rateLimiter.consume(req.connection.remoteAddress)
			.then(() => {
				next();
			})
			.catch(() => {
				res.status(429).send('Too Many Requests');
			});
	};

	app.use(rateLimiterMiddleware);

}
