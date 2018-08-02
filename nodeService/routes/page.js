const Page = new require('../models/page');
const slug = require('slug');
const mongoose = require('mongoose');

module.exports = (app) => {

	app.route('/apiV1/page/add').post((req, res) => {

		const body = req.body;

		if (app.get('env') === 'development') {
			if (!body.userId) {
				body.userId = new mongoose.mongo.ObjectId();
			}
		}

		body.categories = body.categories.replace(/\s/g, '').split(',').map((tag) => {
			return {'name': tag};
		});

		// slug defaults
		slug.defaults.modes['pretty'] = {
			replacement: '-',
			symbols: true,
			remove: /[.]/g,
			lower: true,
			charmap: slug.charmap,
			multicharmap: slug.multicharmap
		};

		Page.create({
			title: body.title,
			slug: slug(body.title, ['pretty' || 'replacement']),
			subTitle: body.subTitle,
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

		console.dir(req.body._id);

		Page.findById(req.body._id, (err, page) => {

			if (err) {
				return res.status(500).send(err);
			}

			if (!page) {
				return res.status(500).send('Could not load Page document');

			} else {

				// slug defaults
				slug.defaults.modes['pretty'] = {
					replacement: '-',
					symbols: true,
					remove: /[.]/g,
					lower: true,
					charmap: slug.charmap,
					multicharmap: slug.multicharmap
				};

				Object.assign(page, req.body);
				page.slug = req.body.slug ? req.body.slug : slug(req.body.title, ['pretty' || 'replacement']);
				console.log(page.slug);
				page.updated = Date.now();
				page.categories = req.body.categories.replace(/\s/g, '').split(',').map((tag) => {
					return {'name': tag};
				});

				console.dir(page);

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
