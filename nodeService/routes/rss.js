const RSS = require('rss');
const Page = new require('../models/page');
const isEmpty = require('lodash.isempty');

module.exports = function (app) {

	const feedOptions = {
		title: 'SoundsVinyl: vinyl forever, music for all',
		description: 'SoundsVinyl is a music recommendation site that mostly concentrates on 7" and 12" vinyl single releases',
		language: 'en',
		site_url: 'https://soundsvinyl.co/',
		feed_url: 'https://soundsvinyl.co/rss.xml'
	};

	console.log('whatever');

	const feed = new RSS(feedOptions);

	const buildRSSFeed = () => {

		const promise = new Promise((resolve, reject) => {

			Page.find({}).sort({'date': -1})
				.exec((err, pages) => {

					if (!err) {
						resolve(pages);
					} else {
						reject(new Error(err.toString()));
					}

				});
		});

		promise.then((result) => {

			if (Array.isArray(result)) {

				result.reduce((accumulator, currentValue) => {

					let description = '';
					description += currentValue._doc.descriptionOne;
					description += ' ' + currentValue._doc.descriptionTwo;
					description += ' ' + currentValue._doc.descriptionThree;

					const url = 'https://soundsvinyl.co/' + currentValue._doc.slug + '/' + currentValue._doc._id.toString();

					/*
					let url = '';
					url += 'https://soundsvinyl.co/';
					url += currentValue._doc.slug;
					url += '/';
					url += currentValue._doc._id.toString();
					*/

					const item = {
						title: currentValue._doc.title,
						description: description.trim(),
						url,
						guid: currentValue._doc._id.toString(),
						date: currentValue._doc.date,
					}

					feed.items.push(item);

				}, feed.items = []);

			} else {
				new Error('returned page content is not array, incorrect type')
			}

		}, (err) => {
			new Error(err.toString())
		});

	}

	buildRSSFeed();

	app.route('/rss.xml').get((req, res) => {

		console.log('xml log called');

		res.header('Content-Type', 'application/xml');

		if (!isEmpty(feed.items)) {

			const xml = feed.xml();
			res.send(xml);

		}
	});
};
