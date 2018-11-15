/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Video extends Component {

	static propTypes = {
		videoLink: PropTypes.oneOfType( [
			PropTypes.string,
			PropTypes.func
		]).isRequired
	};

	static createMarkup () {
		return {
			__html: 'Your browser doesn\'t support HTML5 video. Here is a <a href={videoLink}>link to the video</a> instead.'
		}
	}

	render () {
		const { videoLink } = this.props;

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
					<p dangerouslySetInnerHTML={Video.createMarkup()} />
				</video>
				}
			</React.Fragment>
		)
	}
}

export default Video;
