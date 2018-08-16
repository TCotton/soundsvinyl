import React from 'react';
import PropTypes from 'prop-types';

function FacebookMetaTags (props) {

	return (
		<span>
			<meta property='og:site_name' content='soundsvinyl.co, Vinyl Forever, Music For All">
  		<meta property=' og:title' content='{props.faceBookTitle}' />
  		<meta property=' og:url' content='{props.canonical}' />
  		<meta property=' og:description' content='{props.faceBookDescription}' />
  		<meta property="og:type" content='article' />
  		<meta name=' description' content='{props.faceBookDescription}'>
		</span>
		)
}

FacebookMetaTags.propTypes = {
	faceBookTitle: PropTypes.string,
	canonical: PropTypes.string,
	faceBookDescription: PropTypes.string,
	description: PropTypes.string,
};

export default FacebookMetaTags;
