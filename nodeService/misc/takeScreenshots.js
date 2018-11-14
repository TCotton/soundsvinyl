const ffmpeg = require('fluent-ffmpeg');

const takeScreenshots = (file, fileName) => {

	ffmpeg(file).on('filenames', function (filenames) {
		console.log('Will generate ' + filenames.join(', '));  // eslint-disable-line  no-console
	}).on('end', function () {
		console.log('Screenshots taken'); // eslint-disable-line  no-console
		return true;
	}).takeScreenshots({
		filename: `thumbnail-${fileName}.png`,
		folder: global.__base + '/nodeService/public/thumbnails',
		size: '310x169',
		count: 1,
	});

}

module.exports = takeScreenshots;


