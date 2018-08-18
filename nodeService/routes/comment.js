const Comment = new require('../models/comment');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../config/salt');
const verifyToken = require('./jwt');

module.exports = (app) => {

	app.route('/apiV1/comment/add').post(verifyToken, (req, res) => {

		const body = req.body;

		jwt.verify(bearerBody, secret.salt, (err, authData) => {
			if (!err) {

				const content = body.content.length < 497 ? body.content : (body.content.substring(0, 497) + '...');

				const _id = mongoose.Types.ObjectId();

				Comment.create({
					_id,
				}, (err, page) => {

					if (!err) {
						res.json(page);
					} else {
						return new Error(err);
					}
				});

			} else {
				res.status(403).send(err.message);
			}
		});
	});
}


// add comment
// list comments
// delete comment

