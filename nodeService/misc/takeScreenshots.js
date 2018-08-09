const ffmpeg = require('fluent-ffmpeg');

const takeScreenshots = (file, fileName) => {

	ffmpeg(file).on('filenames', function (filenames) {
		console.log('Will generate ' + filenames.join(', '));
	}).on('end', function () {
		return true;
	}).takeScreenshots({
		filename: `thumbnail-${fileName}.png`,
		folder: global.__base + '/nodeService/thumbnails',
		size: '310x169',
		count: 1,
	});

}

module.exports = takeScreenshots;


