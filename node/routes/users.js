const express = require('express');
const router = express.Router();

/* GET userlist. */
router.get('/userlist', (req, res) => {
	const db = req.db;
	const collection = db.get('userlist');
	collection.find({}, {}, (e, docs) => {
		res.json(docs);
	});
});

/* POST to adduser. */
router.post('/adduser', (req, res) => {
	const db = req.db;
	const collection = db.get('userlist');
	collection.insert(req.body, (err) => {
		res.send(
			(err === null) ? {msg: ''} : {msg: err}
		);
	});
});

/* DELETE to deleteuser. */
router.delete('/deleteuser/:id', (req, res) => {
	const db = req.db;
	const collection = db.get('userlist');
	const userToDelete = req.params.id;
	collection.remove({ '_id' : userToDelete }, (err) => {
		res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
	});
});

module.exports = router;

