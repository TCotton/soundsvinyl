import React from 'react';
import PropTypes from 'prop-types';

function Video (props) {

	function createMarkup () {
		return {
			__html: 'Your browser doesn\'t support HTML5 video. Here is a <a href={props.videoLink}>link to the video</a> instead.'
		}
	}

	return (
		<video controls width='100%'>
			<source src={props.videoLink} type='video/mp4'/>
			<p dangerouslySetInnerHTML={createMarkup()}/>
		</video>
	)
}

Video.propTypes = {
	videoLink: PropTypes.string.isRequired,
};

export default Video;
