import React from 'react';
import PropTypes from 'prop-types';

function FacebookMetaTags (props) {

	const { faceBookTitle, canonical, faceBookDescription } = props;

	return (
		<span>
			<meta
				content='soundsvinyl.co, Vinyl Forever, Music For All'
				property='og:site_name'
			/>
			<meta
				content={faceBookTitle}
				property='og:title'
			/>
			<meta
				content={canonical}
				property='og:url'
			/>
			<meta
				content={faceBookDescription}
				property='og:description'
			/>
			<meta
				content='article'
				property='og:type'
			/>
		</span>
	)
}

FacebookMetaTags.propTypes = {
	canonical: PropTypes.string.isRequired,
	faceBookDescription: PropTypes.string.isRequired,
	faceBookTitle: PropTypes.string.isRequired,
};

export default FacebookMetaTags;
