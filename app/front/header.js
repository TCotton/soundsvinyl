import React from 'react';
import './header.scss';

import TurntableIllustration from '../assets/graphics/Turntable_illustration.svg';

class Header extends React.Component {
//c lassName={`${style.panel} ${style.panelDefault} container`}
	render () {
		return (
			<header>
				<div styleName='innerHeader' className='wrapper'>
					<div styleName='headerLeftColumn'>
						<TurntableIllustration/>
					</div>
					<div styleName='headerRightColumn'>
						<h2>Welcome to Soundsvinyl</h2>
						<p>Nam vel ornare lorem sed eleifend egestas
							dui eu pretium sem mollis et</p>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;
