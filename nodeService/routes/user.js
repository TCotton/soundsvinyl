const User = require('../models/user');
const { createPasswordHash } = require('../misc/helper_functions');

console.log(typeof createPasswordHash);

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
};
