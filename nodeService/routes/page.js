const Page = require('../models/page');

module.exports = (app) => {

	app.route('/apiV1/page/add').post((req, res) => {

		// wtf is this??
		// data is being passed incorrectly in Vue
		const ObjectKeys = Object.keys(req.body)[0];
		const body = JSON.parse(ObjectKeys);

		if (app.get('env') === 'development') {
			if (!body.userId) {
				let newString = Math.random().toString(36).substring(10);
				body.userId = newString.substring(0, newString.length - 3) + 'tEsT';
			}
		}

		Page.create({
			title: body.addPageTitle,
			subTitle: body.addPageSubTitle,
			videoLink: body.addPageVideoLink,
			categories: body.addPageCategories,
			addPageDescriptionOne: body.addPageDescriptionOne,
			addPageDescriptionTwo: body.addPageDescriptionTwo,
			addPageDescriptionThree: body.addPageDescriptionThree,
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

		Page.findById(req.body.id, (err, page) => {

			if (err) {
				res.send(err);
			}

			if (!page) {
				return new Error('Could not load Page document');

			} else {

				Object.assign(page, req.body);
				page.save((err) => {

					if (err) {
						res.send(err);
					} else {
						res.json('Success');
					}

				});
			}
		});
	});
};
