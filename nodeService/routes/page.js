const mongoose = require('mongoose');
const Page = new require('../models/page');
const slugify = require('slugify');

module.exports = (app) => {

	app.route('/apiV1/page/add').post((req, res) => {

		const body = req.body;

		if (app.get('env') === 'development') {
			if (!body.userId) {
				// if not userId, then just generate a false id
				body.userId = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
			}
		}

		body.categories = body.categories.replace(/\s/g, '').split(',').map((tag) => {
			return {'name': tag};
		});

		Page.create({
			title: body.title,
			subTitle: body.subTitle,
			slug: slugify(body.title.toLowerCase()),
			videoLink: body.videoLink,
			categories: body.categories,
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
				throw err;
			}
		});
	});

	app.route('/apiV1/page/get').get((req, res) => {

		Page.find({}, function (err, pages) {

			if (!err) {
				res.json(pages);
			} else {
				throw err;
			}
		});
	});

	app.route('/apiV1/page/get/:id').get((req, res) => {

		Page.findOne({_id: req.params.id}, (err, page) => {

			if (!err) {
				res.json(page);
			} else {
				throw err;
			}

		});
	});

	app.route('/apiV1/page/update').put((req, res) => {

		const body = req.body;

		body.categories = body.categories.replace(/\s/g, '').split(',').map((tag) => {
			return {'name': tag};
		});

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
						throw err;
					} else {
						res.json('Success');
					}

				});
			}
		});
	});

	app.route('/apiV1/page/delete/:id').delete((req, res) => {

		Page.remove({
			_id: req.params.id
		}, (err) => {

			if (err) {
				throw err;
			} else {

				Page.find({}, (err, pages) => {

					if (!err) {
						res.json(pages);
					} else {
						throw err;
					}
				});
			}
		});
	});
};
