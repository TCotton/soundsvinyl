module.exports = (app) => {

	console.log('whatever');
	app.route('/apiV1/page/add').post((req, res) => {
		console.dir(req);
		console.dir(res);
	});

	app.get('/apiV1/page/add').get((req, res) => {
		res.send('Hello World!')
	});
};
