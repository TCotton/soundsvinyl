import React from 'react';
import PropTypes from 'prop-types';
import { thumbnailOne } from '../../alternative_default_thumbnails';

/**
 * props thumbnailUrl is passed by reference to imageURI, so that no thumbnailUrl is mutated
 * if image is not present then the onError SyntheticEvent will give the imageURI data the default embedded data URI
 * as a replacement
 */

function PageUnit (props) {

	let imageURI = props.thumbnailUrl;

	const onError = () => {
		imageURI = thumbnailOne;
	}

	return (
		<div className='pageUnit'>
			<img src={imageURI} alt={props.title} onError={onError}/>
			<span className='video-caption'>{props.title}</span>
		</div>
	);
}

PageUnit.propTypes = {
	title: PropTypes.string,
	thumbnailUrl: PropTypes.string,
};

export default PageUnit;
