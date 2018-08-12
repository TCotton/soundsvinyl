import React from 'react';
import PropTypes from 'prop-types';
import ExtendedPropTypes from 'extended-proptypes';
import {
	componentDidMount
} from 'react-pure-lifecycle';
import { thumbnailOne } from '../../alternative_default_thumbnails';

/**
 * props thumbnailUrl is passed by reference to imageURI, so that no thumbnailUrl is mutated
 * if image is not present then the onError SyntheticEvent will give the imageURI data the default embedded data URI
 * as a replacement
 */

function PageUnit (props) {

	let imageURI = props.thumbnailUrl;

	const onImageError = () => {
		imageURI = thumbnailOne;
	};

	return (
		<a href={`/${props.slug}/${props._id}`} className='pageUnit'>
			<img src={imageURI} alt={props.title} onError={onImageError}/>
			<span className='video-title'>{props.title}</span>
		</a>
	);
}

PageUnit.propTypes = {
	title: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	shortSlug: PropTypes.string.isRequired,
	_id: ExtendedPropTypes.mongoId.isRequired,
};

export default componentDidMount(onImageError)(PageUnit);
