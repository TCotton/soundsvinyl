import React from 'react';
import header from './header.scss';

import TurntableIllustration from '../assets/graphics/Turntable_illustration.svg';

class Header extends React.Component {

	render () {
		return (
			<header>
				<div className={header.headerLeftColumn}>
					<TurntableIllustration />
				</div>
				<div className={header.headerRightColumn}>
					<h2>Welcome to Soundsvinyl</h2>
					<p>Nam vel ornare lorem sed eleifend egestas
						dui eu pretium sem mollis et</p>
				</div>
			</header>
		)
	}
}

export default Header;
