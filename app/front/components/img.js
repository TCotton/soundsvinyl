import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
	const { alt, className, src } = props;
	return (
		<img
			alt={alt}
			className={className}
			src={src}
		/>
	);
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Img;
