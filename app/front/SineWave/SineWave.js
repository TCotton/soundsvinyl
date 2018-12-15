import { Component } from 'react';
import React from 'react';
import './sinewave.scss';
import PropTypes from 'prop-types'

export default class SineWave extends Component {

	static videoURI = {
		videoURI: PropTypes.string.required
	}

/*	static defaultProps = {
		categories: false,
	}*/

	constructor ( props ) {
		super( props );
	}

	componentDidMount() {
		const { videoURI } = this.props;

		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		const context = new AudioContext();
		const analyser = context.createAnalyser();
		analyser.minDecibels = -90;
		analyser.maxDecibels = -10;
		analyser.smoothingTimeConstant = 0.85;
		this.loadSound(videoURI);
	}

	loadSound(url) {

		const request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';

		request.onload = function() {
			// request.response is encoded... so decode it now
			context.decodeAudioData(request.response, (buffer) => {
				console.dir(buffer);
			}, (err) => {
				console.dir(err);
			});
		};

		request.send();
	}

	render () {

		return (
			<React.Fragment>
				<section styleName='sinewave' />
			</React.Fragment>
		)
	}
}
