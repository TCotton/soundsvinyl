const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = new require('../models/user');
const verifyToken = require('./jwt');

const fs = require('fs');
const dir = 'log';
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

module.exports = (app) => {

	app.route('/apiV1/user/add').post((req, res) => {

		const body = req.body;

		User.find({email: req.body.email}, (err, user) => {
			// needs refactoring so that if a duplicate is found tha
			// that information is send to the front to be used in
			// UI error messages

			// 409 is a status error code for conflict
			if (!err) {

				if (user.length > 0) {
					return res.status(409).send('Email address is already registered');
				}

				bcrypt.hash(body.password, process.env.saltRounds).then((hash) => {

					User.create({
						email: body.email,
						password: hash,
						date: Date.now(),
						userLevel: body.userLevel ? body.userLevel : 2,
						username: body.username,
						profile: Math.floor(Math.random() * 5 + 1),
					}, (err) => {

						if (!err) {
							res.status(200).send({auth: true});
						} else {
							return res.status(500).send('There was a problem registering the user.');
						}

					});

				});

			} else {
				return res.status(500).send('There was a problem registering the user.');
			}

		});
	});

	app.route('/apiV1/user/find').post((req, res) => {

		User.findOne({email: req.body.email}, (err, user) => {

			if (!err) {

				if (!user) {
					return res.status(200).send('Email address not found');
				}

				bcrypt.compare(req.body.password, user.password, (err, response) => {

					if (!err) {

						if (response) {

							const token = jwt.sign({...user}, process.env.salt, {
								expiresIn: 86400 // expires in 24 hours
							});

							const send = {
								auth: true,
								token
							}

							res.json(send);

						} else {
							return res.status(200).json({error: 'Password is incorrect'});
						}

					} else {
						return new Error(err.toString());
					}

				});

			} else {
				return res.status(500).send('There was a problem finding the user');
			}

		});
	});

	app.route('/apiV1/user/get').get(verifyToken, (req, res) => {

		User.find({}).sort({'date': -1})
			.exec((err, pages) => {

				if (!err) {
					res.json(pages);
				} else {
					return new Error(err.toString());
				}
			});
	});

	// FORMAT OF TOKEN
	// Authorization: Bearer <access_token>

	app.route('/apiV1/jwt/generate').post((req, res) => {
		// Get auth header value
		const bearerBody = req.body.token;
		// check if bearer is undefined
		if (typeof bearerBody !== 'undefined') {
			// Set the token
			jwt.verify(bearerBody, process.env.salt, (err, authData) => {
				if (!err) {

					if (authData._doc.userLevel === 1) {
						res.json({authData});
					} else {
						res.status(403).send('You do not have the right role level permissions');
					}

				} else {
					res.status(403).send(err.message);
				}
			});

		} else {
			res.sendStatus(403);
		}

	});

	app.route('/apiV1/user/get/:id').get((req, res) => {

		User.findOne({_id: req.params.id}, (err, page) => {

			if (!err) {
				res.json(page);
			} else {
				return new Error(err.toString());
			}

		});
	});

	app.route('/apiV1/user/update').put((req, res) => {

		User.findById(req.body._id, (err, user) => {
			if (err) {
				res.send(err);
			}

			if (!user) {
				return new Error('Could not load User document');

			} else {

				req.body.updated = Date.now();
				Object.assign(user, req.body);
				user.save((err) => {

					if (err) {
						res.send(err);
					} else {
						res.json('Success');
					}

				});
			}
		});
	});

	app.route('/apiV1/user/delete/:id').delete((req, res) => {

		User.remove({
			_id: req.params.id
		}, (err) => {

			if (err) {
				return new Error(err.toString());
			} else {

				User.find({}, (err, users) => {

					if (!err) {
						res.json(users);
					} else {
						return new Error(err.toString());
					}
				});
			}
		});
	});
};
