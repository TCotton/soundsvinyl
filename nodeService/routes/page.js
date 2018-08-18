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
			.limit(12)
			.exec((err, pages) => {

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

		body.updated = Date.now;

		Page.findById(body._id, (err, page) => {

			if (err) {
				res.send(err);
			}

			if (!page) {
				return new Error('Could not load Page document');

			} else {

				Object.assign(page, body);
				page.save((err) => {

					if (err) {
						return new Error(err.toString());
					} else {
						res.json('Success');
					}
				});
			}
		});
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
