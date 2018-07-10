#!/usr/bin/env bash

module.exports = (app) => {

	if (process.env.NODE_ENV !== 'production') {
		app.all('*', function (req, res, next) {
			res.setHeader('Cache-Control', 'no-cache');
			next();
		});

		// Error Handling
		app.use(function (err, req, res, next) {
			if (err) {
				next(err);
			} else {
				next();
			}
		});

	}

	app.all('*', function (req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
		next();
	});
};
