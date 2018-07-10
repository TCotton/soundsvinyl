const Page = require('../models/page');

module.exports = (app) => {

	app.route('/apiV1/page/add').post((req, res) => {

		console.dir(req.params);

		/**
		 * {"addPageTitle":"Here is the record title","addPageSubTitle":"here is the record label",
		 * "addPageVideoLink":"https://stackoverflow.com/questions/30379127/how-to-install-earlier-version-of-mongodb-with-homebrew",
		 * "addPageDescriptionOne":"This is the first paragraph description","addPageDescriptionTwo":"This is the second paragraph description",
		 * "addPageDescriptionThree":"This is the third paragraph description","addPageCategories":"this, is, a, list"}
		 */

		Page.create({
			title: req.body.addPageTitle,
			subTitle: req.body.subTitle,
			videoLink: req.body.videoLink,
			categories: req.body.categories,
			addPageDescriptionOne: req.body.addPageDescriptionOne,
			addPageDescriptionTwo: req.body.addPageDescriptionTwo,
			addPageDescriptionThree: req.body.addPageDescriptionThree,
			userId: req.body.userId,
			date: req.body.date,
			updated: req.body.updated,
		}, (err, page) => {

			if (err) {
				res.send(err);
			}

			if (page.length > 0) {
				res.json(page);
			}

		});

	});

};
