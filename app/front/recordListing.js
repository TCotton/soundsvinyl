import React from 'react';
import './recordListing.scss';
import MAIN from '../assets/graphics/MAIN_DUMMY_VIDEO_IMAGE.png';
import sine from '../assets/graphics/Sine_wave_placeholder_pic.png'

class RecordListing extends React.Component {
	render () {
		return (
			<main styleName='recordListing'>
				<header className='record'>
					<h1>Al Campbell: Gone Down the Drain</h1>
					<p>(Reggae Road Production, 1978)</p>
				</header>
				<section>
					{/* temp markup */}
					<div>
						<img src={MAIN} alt='temp pictureee'/>
						<img src={sine} alt='sine waves'/>
					</div>

				</section>
			</main>
		)
	}
}

export default RecordListing;
