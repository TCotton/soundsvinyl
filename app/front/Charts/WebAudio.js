/* eslint-disable */
import React, { Component } from 'react';
import { homeURI } from '../../helper_constants';
import PropTypes from 'prop-types'
import './WebAudio.scss';

export class WebAudio extends Component {

	static propTypes = {
		audioFile: PropTypes.oneOfType( [ PropTypes.string, PropTypes.func ] ).isRequired
	};

	constructor ( props ) {
		super( props );
		this.constructAudio = this.constructAudio.bind( this );
		this.constructAudio();
	}

	constructAudio () {

		const { audioFile } = this.props;

		// Create a new instance of an audio object and adjust some of its properties
		var video = document.getElementById('video');
		// Establish all variables that your Analyser will use
		var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
		// Initialize the MP3 player after the page loads all of its HTML into the window
		window.addEventListener( "load", initMp3Player, false );

		function initMp3Player () {
			document.getElementById( 'audio_box' ).appendChild( audio );
			context = new AudioContext(); // AudioContext object instance
			analyser = context.createAnalyser(); // AnalyserNode method
			canvas = document.getElementById( 'analyser_render' );
			ctx = canvas.getContext( '2d' );
			// Re-route audio playback into the processing graph of the AudioContext
			source = context.createMediaElementSource( video );
			source.connect( analyser );
			analyser.connect( context.destination );
			frameLooper();
		}

		// frameLooper() animates any style of graphics you wish to the audio frequency
		// Looping at the default frame rate that the browser provides(approx. 60 FPS)
		function frameLooper () {
			window.requestAnimationFrame( frameLooper );
			fbc_array = new Uint8Array( analyser.frequencyBinCount );
			analyser.getByteFrequencyData( fbc_array );
			ctx.clearRect( 0, 0, canvas.width, canvas.height ); // Clear the canvas
			ctx.fillStyle = '#00CCFF'; // Color of the bars
			bars = 100;
			for( let i = 0; i < bars; i++ ) {
				bar_x = i * 3;
				bar_width = 2;
				bar_height = -( fbc_array[ i ] / 2 );
				//  fillRect( x, y, width, height ) // Explanation of the parameters below
				ctx.fillRect( bar_x, canvas.height, bar_width, bar_height );
			}
		}
	}

	render () {
		return (
			<React.Fragment>
				<div id='mp3_player'>
					<div id='audio_box' />
					<canvas id='analyser_render' />
				</div>
			</React.Fragment>
		)
	}
}

export default WebAudio;
