import React from 'react';
import PropTypes from 'prop-types';

function TwitterMetaTags (props) {

	return (
		<span>
			<meta name='twitter:card' content='summary'/>
			<meta name='twitter:site' content='@andywalpole' />
			<meta name='twitter:title' content={props.title}/>
			<meta name='twitter:description' content={props.description}/>
		</span>
	);

}

TwitterMetaTags.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default TwitterMetaTags;

