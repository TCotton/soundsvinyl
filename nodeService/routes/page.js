const Page = require('../models/page');

module.exports = (app) => {

	app.route('/apiV1/page/add').post((req, res) => {

		// wtf is this??
		// data is being passed incorrectly in Vue
		const ObjectKeys = Object.keys(req.body)[0];
		const body = JSON.parse(ObjectKeys);

		if (app.get('env') === 'development') {
			if(!body.userId) {
				body.userId =  Math.random().toString(36).substring(10);
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
			date: Date.now(),
		}, (err, page) => {

			if (!err){
				res.json(page);
			} else {
				throw err;
			}
		});
	});

	app.route('/apiV1/page/get').get((req, res) => {

		Page.find({}, function(err, pages) {
			if (!err){
				res.json(pages);
			} else {
				throw err;
			}
		});
	});

	app.route('/apiV1/page/get/:id').get((req, res) => {

		Page.findOne({_id: req.params.id}, (err, page) => {

			if (!err){
				res.json(page);
			} else {
				throw err;
			}

		});
	});
};
