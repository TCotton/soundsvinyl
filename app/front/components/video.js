/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

function Video (props) {

	const { videoLink } = props;

	function createMarkup () {
		return {
			__html: 'Your browser doesn\'t support HTML5 video. Here is a <a href={videoLink}>link to the video</a> instead.'
		}
	}

	return (
		<React.Fragment>
			{typeof videoLink === 'string' &&
			<video
				controls
				width='100%'
			>
				<source
					src={videoLink}
					type='video/mp4'
				/>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</video>
			}
		</React.Fragment>
	)
}

// why does this render first as a function
Video.propTypes = {
	videoLink: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.func
	]).isRequired };

export default Video;
