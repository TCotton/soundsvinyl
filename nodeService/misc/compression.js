module.exports = (app) => {
	app.get('*.js', function (req, res, next) {
		req.url = req.url + '.gz';
		res.set('Content-Encoding', 'gzip');
		next();
	});
}
