const User = require('../models/user');

module.exports = (app) => {

	app.route('/apiV1/user/add').post((req, res) => {

		console.dir(req.body);

		res.send('Hello World!');

	/*	// wtf is this??
		// data is being passed incorrectly in Vue
		const ObjectKeys = Object.keys(req.body)[0];
		const body = JSON.parse(ObjectKeys);

		if (app.get('env') === 'development') {
			if(!body.userId) {
				body.userId =  Math.random().toString(36).substring(10);
			}
		}*/

		/**
		 * 	email: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true
	},
		 password: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true
	},
		 date: {
		type: mongoose.Schema.Types.Date,
		default: Date.now
	},
		 updated: {
		type: mongoose.Schema.Types.Date,
	},
		 */

/*		User.create({
			email: body.addPageTitle,
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
		});*/
	});

}
