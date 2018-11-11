const Comment = new require('../models/comment');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const verifyToken = require('./jwt');

if (fs.existsSync('./node-variables.env')) {
	const dotenv = require('dotenv');
	const result = dotenv.config({ path: './node-variables.env' })
	if (result.error) {
		throw result.error;
	}
}

module.exports = (app) => {

	app.route('/apiV1/comment/add').post(verifyToken, (req, res) => {

		debugger;

		const body = req.body;

		jwt.verify(req.token, process.env.salt, (err, authData) => {

			if (!err) {

				const content = body.content.length < 497 ? body.content : (body.content.substring(0, 497) + '...');
				const _id = mongoose.Types.ObjectId();

				Comment.create({
					_id,
					content,
					articleId: body.articleId,
					userId: authData._doc._id,
					userName: authData._doc.username,
					date: Date.now(),
				}, (err, page) => {

					if (!err) {
						res.json(page);
					} else {
						return new Error(err.toString());
					}
				});

			} else {
				res.status(403).send(err.message);
			}
		});
	});

	app.route('/apiV1/comment/get').get(verifyToken, (req, res) => {

		Comment.find({}, (err, pages) => {

			if (!err) {
				res.json(pages);
			} else {
				return new Error(err.toString());
			}
		});
	});

	app.route('/apiV1/comment/get/article').get(verifyToken, (req, res) => {

		Comment.find({}, (err, pages) => {

			if (!err) {
				res.json(pages);
			} else {
				return new Error(err.toString());
			}
		});
	});

	app.route('/apiV1/comment/delete/:id').delete(verifyToken, (req, res) => {

		Comment.remove({
			_id: req.params.id
		}, (err) => {

			if (err) {
				throw err;
			} else {

				Comment.find({}, (err, pages) => {

					if (err) {
						return new Error(err.toString());
					}

					if (!err) {
						res.json(pages);
					} else {
						return new Error(err.toString());
					}
				});
			}
		});
	});

	app.route('/apiV1/comment/get/:id').get(verifyToken, (req, res) => {

		Comment.findOne({_id: req.params.id}, (err, page) => {

			if (!err) {
				res.json(page);
			} else {
				return new Error(err.toString());
			}

		});
	});

	app.route('/apiV1/comment/update').put(verifyToken, (req, res) => {

		const body = req.body;

		Comment.findById(body._id, (err, comment) => {

			if (err) {
				return new Error(err.toString());
			}

			if (!comment) {
				return new Error('Could not load Commment document');

			} else {

				Object.assign(comment, body);
				comment.save((err) => {

					if (err) {
						return new Error(err.toString());
					} else {
						res.json('Success');
					}
				});
			}
		});
	});

	app.route('/apiV1/page/comment/:id').get((req, res) => {

		Comment.find({articleId: req.params.id, 'published': true}, (err, comment) => {

			if (err) {
				return new Error(err.toString());
			}

			if (!err) {
				res.json(comment);
			} else {
				return new Error(err.toString());
			}
		});

	});

}
