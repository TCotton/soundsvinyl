import React from 'react';
import header from './header.scss';

import TurntableIllustration from '../assets/graphics/Turntable_illustration.svg';

class Header extends React.Component {

	render () {
		console.dir(TurntableIllustration);
		return (
			<header>
				<div className={header.headerLeftColumn}>
					<TurntableIllustration />
				</div>
				<div className={header.headerRightColumn}>
					&nbsp;
				</div>
			</header>
		)
	}
}

export default Header;
