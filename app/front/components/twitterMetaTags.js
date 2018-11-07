import React from 'react';
import PropTypes from 'prop-types';

function TwitterMetaTags (props) {

	const { title, description } = props;

	return (
		<span>
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
		</span>
	);

}

TwitterMetaTags.propTypes = {
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default TwitterMetaTags;

