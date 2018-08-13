const slugify = require('slugify');

const createStringSlug = (body) => {
	return slugify(body.title.toLowerCase());
}

const createShortSlug = (id) => {

	const splitString = id.toString().split('');
	const reverseArray = splitString.reverse();
	const joinArray = reverseArray.join('');

	return joinArray.substr(13, 24).toLowerCase();
};

const createCategories = (body) => {
	return body.categories.split(',').map((tag) => {
		return {'name': tag.toLowerCase().trim()};
	});
}

module.exports = {
	createStringSlug,
	createShortSlug,
	createCategories
}
