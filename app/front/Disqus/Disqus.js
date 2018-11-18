import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './disqus.scss';

const Shortname = 'soundsvinyl';
const Website_URL = 'https://soundsvinyl.co';

function renderDisqus () {
	if( window.DISQUS === undefined ) {
		const script = document.createElement( 'script' );
		script.async = true;
		script.id = 'disqus-script';
		script.src = 'https://' + Shortname + '.disqus.com/embed.js';
		document.getElementsByTagName( 'head' )[ 0 ].appendChild( script );
	} else {
		window.DISQUS.reset( { reload: true } );
	}
}

export default class Disqus extends Component {

	static propTypes = {
		id: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	};

	componentDidMount () {
		renderDisqus();
	}

	shouldComponentUpdate ( nextProps ) {
		const { id, title, path } = nextProps;

		return (
			id || title || path
		);
	}

	componentWillUnmount () {

		if( document.getElementById( 'disqus-script' ) ) {

			const script = document.getElementById( 'disqus-script' );
			script.parentNode.removeChild( script );
		}
	}

	render () {
		let { id, title, path, ...other } = this.props;

		if( process.env.BROWSER ) {
			window.disqus_shortname = Shortname;
			window.disqus_identifier = id;
			window.disqus_title = title;
			window.disqus_url = Website_URL + path;
		}

		return (
			<div
				{...other}
				id='disqus_thread'
			/>
		);
	}
}

