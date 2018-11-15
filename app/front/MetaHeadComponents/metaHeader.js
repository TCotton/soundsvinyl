import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function MetaHeader (props) {
	const { title } = props;

	return (
		<Helmet>
			<title>
				{'Soundsvinyl.co: '}
				{title}
			</title>
		</Helmet>
	);
}

MetaHeader.propTypes = { title: PropTypes.string.isRequired };

export default MetaHeader;
