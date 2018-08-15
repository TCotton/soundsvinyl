

app.route('/apiV1/page/get/:id').get((req, res) => {

	Page.findOne({_id: req.params.id}, (err, page) => {

		if (!err) {
			res.json(page);
		} else {
			throw err;
		}

	});
});
