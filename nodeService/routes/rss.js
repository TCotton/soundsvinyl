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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
	constructor ( props ) {
		super( props );
	}

	componentWillMount () {

	}

	componentDidMount () {

	}

	componentWillReceiveProps ( nextProps ) {

	}

	shouldComponentUpdate ( nextProps, nextState ) {

	}

	componentWillUpdate ( nextProps, nextState ) {

	}

	componentDidUpdate ( prevProps, prevState ) {

	}

	componentWillUnmount () {

	}

	render () {
		return (
			<div>

			</div>
		);
	}
}

MyComponent.propTypes = {};

export default MyComponent;

