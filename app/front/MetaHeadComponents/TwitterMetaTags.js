import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwitterMetaTags extends Component {

	static propTypes = {
		description: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	};

	render () {
		const { title, description } = this.props;

		return (
			<React.Fragment>
				<meta
					content='summary'
					name='twitter:card'
				/>
				<meta
					content='@andywalpole'
					name='twitter:site'
				/>
				<meta
					content={title}
					name='twitter:title'
				/>
				<meta
					content={description}
					name='twitter:description'
				/>
			</React.Fragment>
		)
	}
}

export default TwitterMetaTags;
