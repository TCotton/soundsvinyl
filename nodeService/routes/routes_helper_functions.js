const slugify = require('slugify');

const createStringSlug = (body) => {
	return slugify(body.title.toLowerCase());
}

const createNumberSlug = (id) => {
	return Number.parseInt(id.reverse().substr(13, 24),10);
};

const createCategories = (body) => {
	return body.categories.split(',').map((tag) => {
		return {'name': tag.toLowerCase().trim()};
	});
}

module.exports = {
	createStringSlug,
	createNumberSlug,
	createCategories
}
