import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaHeader extends Component {

	static propTypes = {
		canonical: PropTypes.string,
		title: PropTypes.string,
	}

	static defaultProps = {
		canonical: '',
		title: 'Vinyl forever, music for all'
	}

	constructor ( props ) {
		super( props );
	}

	componentDidMount () {
		const { title, canonical } = this.props;

		if( document.querySelector( 'link[rel=\'canonical\']' ) ) {
			document.querySelector( "link[rel='canonical']" ).href = `https://soundsvinyl.co/${canonical}`
		}

		if( document.title ) {
			document.title = `Soundsvinyl.co: ${title}`;
		}
	}

	componentWillUnmount () {

		if( document.querySelector( 'link[rel=\'canonical\']' ) ) {
			document.querySelector( "link[rel='canonical']" ).href = 'https://soundsvinyl.co/';
		}

		if( document.title ) {
			document.title = `Soundsvinyl.co: Vinyl forever, music for all`;
		}

	}

	render () {

		const { title, canonical } = this.props;

		return (
			<React.Fragment>
				<title>
					{'Soundsvinyl.co: '}
					{title}
				</title>
				{
					canonical.length > 0 &&
					<link
						href={`https://soundsvinyl.co/${canonical}`}
						rel='canonical'
					/>
				}
			</React.Fragment>
		)
	}
}

export default MetaHeader;
