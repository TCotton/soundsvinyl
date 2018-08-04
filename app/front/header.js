import React from 'react';
import './header.scss';

import TurntableIllustration from '../assets/graphics/Turntable_illustration.svg';

class Header extends React.Component {
	render () {
		return (
			<header styleName='header'>
				<div styleName='innerHeader' className='wrapper'>
					<div styleName='headerLeftColumn'>
						<TurntableIllustration/>
					</div>
					<div styleName='headerRightColumn'>
						<h2>Welcome to Soundsvinyl</h2>
						<p>Music from the archives</p>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;
