import { Feed } from 'feed';

module.exports = ( app ) => {
	
	const feed = new Feed({
		title: 'vinylsounds: Vinyl forever, music for all',
		description: 'music review site',
		language: 'en',
		id: 'https://vinylsounds.co/',
		link: 'https://vinylsounds.co/',
		favicon: 'https://vinylsounds.co/favicon.ico',
		copyright: "All rights reserved 2013, John Doe",
		feedLinks: {
			json: 'https://vinylsounds.co/rss.xml'
		}
	});



}
