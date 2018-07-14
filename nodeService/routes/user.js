const User = require('../models/user');
const { createPasswordHash } = require('../misc/helper_functions')

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
					console.log('not found user');
					console.dir(user.length);
				}

				User.create({
					email: body.email,
					password: createPasswordHash(body.password),
					date: Date.now(),
				}, (err, page) => {

					if (!err) {
						res.json(page);
					} else {
						throw err;
					}

				});

			} else {
				throw err;
			}

		});
	});

	app.route('/apiV1/user/get').get((req, res) => {

		User.find({}, function (err, user) {

			if (!err) {
				res.json(user);
			} else {
				throw err;
			}
		});
	});

	app.route('/apiV1/user/get/:id').get((req, res) => {

		User.findOne({_id: req.params.id}, (err, page) => {

			if (!err) {
				res.json(page);
			} else {
				throw err;
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
				throw err;
			} else {

				User.find({}, (err, users) => {

					if (!err) {
						res.json(users);
					} else {
						throw err;
					}
				});

			}
		});
	});
};
