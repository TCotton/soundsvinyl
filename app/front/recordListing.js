import React from 'react';
import './recordListing.scss';
import MAIN from '../assets/graphics/MAIN_DUMMY_VIDEO_IMAGE.png';
import sine from '../assets/graphics/Sine_wave_placeholder_pic.png'

class RecordListing extends React.Component {
	render () {
		return (
			<main styleName='recordListing'>
				<header className='record'>
					<h2>Al Campbell: Gone Down the Drain</h2>
					<p>(Reggae Road Production, 1978)</p>
				</header>
				<section>
					{/* temp markup */}
					<div>
						<img src={MAIN} alt='temp pictureee'/>
						<img src={sine} alt='sine waves'/>
					</div>
				</section>

				<section styleName='description'>
					<p>Al Campbell is one of the few reggae vocalists from the long Jamaican Golden Era whose re-releases I would buy without hesitation. This track, delivered in his usual melodic style, is a curiosity because of differential lyrics.</p>

					<p>Campbell lists Jamaican Black nationalist figures - Marcus Garvey, Paul Bogle and George Gordon - asking ‘Do you remember?’ to which he responds ‘They’ve just gone, gone down the drain. When we remember them, they are sometimes like teardrops in the rain”</p>

					<p>The message is is a bleak inversion of the classic Rastafarian lyrical romanticism.</p>

					<div styleName='categories'>
						<ul>
							<li>Category One</li>
							<li>Category two</li>
							<li>Category three</li>
						</ul>
					</div>

				</section>

				<section styleName='commentsForm'>
					<h2>Comments</h2>

					<form>

						<textarea></textarea>

						<input type='submit' />

					</form>

				</section>
			</main>
		)
	}
}

export default RecordListing;
