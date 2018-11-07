import React from 'react';
import PropTypes from 'prop-types';
import ExtendedPropTypes from 'extended-proptypes';
import { thumbnailOne, thumbnailTwo, thumbnailThree } from '../../alternative_default_thumbnails';
import { Link } from 'react-router-dom';

/**
 * props thumbnailUrl is passed by reference to imageURI, so that no thumbnailUrl is mutated
 * if image is not present then the onError SyntheticEvent will give the imageURI data the default embedded data URI
 * as a replacement
 */

function PageUnit (props) {

	const { slug, id, thumbnailUrl, title, subtitle} = props;

	const myArray = [thumbnailOne, thumbnailTwo, thumbnailThree];
	const thumbnailDefault = myArray[Math.floor(Math.random() * myArray.length)];

	return (
		<Link
			className='pageUnit'
			to={`/${slug}/${id}`}
		>
			<img
				alt={title}
				onError={(e) => {e.target.src = thumbnailDefault}} // eslint-disable-line react/jsx-no-bind
				src={thumbnailUrl}
			/>
			<span className='video-title'>
				{title}
			</span>
			<span className='video-subtitle'>
				{subtitle}
			</span>
		</Link>
	);
}

PageUnit.propTypes = {
	id: ExtendedPropTypes.mongoId.isRequired,
	shortSlug: PropTypes.string,
	slug: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

PageUnit.defaultProps = { shortSlug: '' }

export default PageUnit;
