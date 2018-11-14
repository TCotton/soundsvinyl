const mongoose = require('mongoose');
const Page = new require('../models/page');
const {
	createStringSlug,
	createShortSlug,
	createCategories
} = require('./routes_helper_functions');
const fs = require('fs');

module.exports = (app) => {

	app.route('/apiV1/page/add').post((req, res) => {

		const body = req.body;

		if (app.get('env') === 'development') {
			if (!body.userId) {
				// if not userId, then just generate a false id
				body.userId = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
			}
		}

		const _id = mongoose.Types.ObjectId();

		Page.create({
			_id,
			title: body.title,
			subTitle: body.subTitle,
			slug: createStringSlug(body),
			shortSlug: createShortSlug(_id),
			videoLink: body.videoLink,
			categories: createCategories(body),
			descriptionOne: body.descriptionOne,
			descriptionTwo: body.descriptionTwo,
			descriptionThree: body.descriptionThree,
			descriptionFour: body.descriptionFour,
			descriptionFive: body.descriptionFive,
			userId: body.userId,
			date: body.date ? body.date : Date.now(),
			updated: body.updated ? body.updated : Date.now(),
		}, (err, page) => {

			if (!err) {

				const takeScreenshots = require('../misc/takeScreenshots');
				if (page.videoLink) {
					takeScreenshots(page.videoLink, page._id);
				}

				res.json(page);
			} else {
				return new Error(err.toString());
			}
		});
	});

	app.route('/apiV1/page/get').get((req, res) => {

		Page.find({}).sort({'date': -1})
			.limit(17)
			.exec((err, pages) => {

				if (!err) {
					res.json(pages);
				} else {
					return new Error(err.toString());
				}

			});
	});


	app.route('/apiV1/page/getall').get((req, res) => {

		Page.find({}).sort({'date': -1})
			.exec((err, pages) => {

				if (!err) {
					res.json(pages);
				} else {
					return new Error(err.toString());
				}

			});
	});

	app.route('/apiV1/page/getadmin').get((req, res) => {

		Page.find({}, (err, pages) => {

			if (!err) {
				res.json(pages);
			} else {
				return new Error(err.toString());
			}
		});
	});

	app.route('/apiV1/page/get/:id').get((req, res) => {

		Page.findOne({_id: req.params.id}, (err, page) => {

			if (!err) {
				res.json(page);
			} else {
				return new Error(err.toString());
			}

		});
	});

	app.route('/apiV1/page/update').put((req, res) => {

		const body = req.body;

		body.categories = body.categories.split(',').map((tag) => {
			return {'name': tag.trim()};
		});

		body.updated = Date.now();

		// This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
// Find the existing resource by ID
		Page.findByIdAndUpdate(
			// the id of the item to find
			body._id,

			// the change to be made. Mongoose will smartly combine your existing
			// document with this change, which allows for partial updates too
			body,

			// an option that asks mongoose to return the updated version
			// of the document instead of the pre-updated one.
			{new: true},

			// the callback function
			(err, page) => {
				// Handle any possible database errors
				if (err) return res.status(500).send(err);
				return res.send(page);
			}
		)
	});

	/* eslint-disable security/detect-non-literal-fs-filename */

	app.route('/apiV1/page/delete/:id').delete((req, res) => {

		Page.remove({
			_id: req.params.id
		}, (err) => {

			if (err) {
				throw err;
			} else {

				Page.find({}, (err, pages) => {

					if (err) {
						return new Error(err.toString());
					}

					if (fs.existsSync(global.__base + '/nodeService/public/thumbnails/thumbnail-' + req.params.id + '.png')) {
						const file = global.__base + '/nodeService/public/thumbnails/thumbnail-' + req.params.id + '.png';

						fs.access(file, function (err) {

							if (err) {
								return;
							}

							fs.unlink(file, function (err) {
								if (err) {
									return new Error(err.toString());
								}
							});
						});
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

	/* eslint-enable security/detect-non-literal-fs-filename */

};
