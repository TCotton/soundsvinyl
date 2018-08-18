function verifyToken (req, res, next) {

	const bearerHeader = req.headers['authorization'] || req.headers['Authorization'];

	if (typeof bearerHeader !== 'undefined') {

		// Split at the space
		const bearer = bearerHeader.split(' ');
		req.token = bearer[1];

		next();

	} else {
		res.sendStatus(403);
	}

}

module.exports = verifyToken;
