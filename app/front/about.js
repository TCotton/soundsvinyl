import React from 'react';
import './about.scss';

class AboutUs extends React.Component {
	render () {

		return (
			<main styleName='aboutUs'>
				<h2>About us</h2>
				<p>Nam vel ornare lorem sed eleifend egestas</p>
				<section>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan, quam auctor varius tincidunt, ante massa bibendum sapien, eget bibendum nunc lacus et mi. Nam vel ornare lorem. Sed eleifend egestas dui, eu pretium sem mollis et. Duis sed vestibulum erat, eu venenatis dui.</p>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum odio in metus ultricies, et ultricies lorem elementum. Etiam quis faucibus sem. Suspendisse vitae tellus dolor. Duis sodales orci arcu, et sollicitudin neque suscipit id.</p>
				</section>
			</main>
		)
	}
}

export default AboutUs;
