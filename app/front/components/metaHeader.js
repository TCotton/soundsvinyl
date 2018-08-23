import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function MetaHeader (props) {
	return (
		<Helmet>
			<title>Soundsvinyl.co: {props.title}</title>
		</Helmet>
	);
}

MetaHeader.propTypes = {
	title: PropTypes.string,
};

export default MetaHeader;
