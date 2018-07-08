module.exports = (app) => {

	console.log('whatever');
	app.route('/apiV1/page/add').post((req, res) => {
		res.send('Added!');
	});

	app.get('/apiV1/page/add').get((req, res) => {
		res.send('Hello World!');
	});

};
