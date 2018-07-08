#!/usr/bin/env bash

module.exports = (app) => {

	if (process.env.NODE_ENV !== 'production') {
		app.all('*', function (req, res, next) {
			res.setHeader('Cache-Control', 'no-cache');
			next();
		});
	}

	app.all('*', function (req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
		next();
	});

};
