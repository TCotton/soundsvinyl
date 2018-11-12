const sMap = require( 'sitemap' );
const Page = require( '../models/page' );

let tasks;
let url;
let sitemap;

function addProjects () {
	url = [];
	next( null, url );
}

function getDataBasePages ( url ) {

	Page.find( function( err, pages ) {

		if( !err ) {

			Object.keys( pages ).forEach( function( key ) {
				const pageURl = `/${pages[ key ].slug}/${pages[ key ]._id}`
				url.push( { url: pageURl, changefreq: 'weekly', priority: 0.7 } );
			} );

			next( null, url );
		}
	} );

	sitemap = sMap.createSitemap( {
		hostname: 'https://soundsvinyl.co',
		cacheTime: 600000,
		urls: url
	} );
}

function createSiteLinks () {

	tasks = [
		addProjects,
		getDataBasePages,
	];

	next();
}

function next ( err, result ) {
	if( err ) throw err;

	const currentTask = tasks.shift();

	if( currentTask ) {
		currentTask( result );
	}
}

createSiteLinks();

module.exports = ( app ) => {

	app.route( '/sitemap.xml' ).get( function( req, res ) {

		sitemap.toXML( function( err, xml ) {
			if( err ) {
				return res.status( 500 ).end();
			}
			res.header('Content-Type', 'application/xml');
			res.send(xml);
		});
	});
}
