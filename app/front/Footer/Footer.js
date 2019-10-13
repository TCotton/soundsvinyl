import React, { Component } from 'react';
import './footer.scss';
import cn from 'classnames';
import FooterUnorderedList from './FooterUnorderedList';

class Footer extends Component {
	render () {

		const footerClasses = cn('inner-footer', 'wrapper');
		const $soundsVinyl = 'SoundsVinyl';

		return (
			<footer>
				<div
					className={footerClasses}
					styleName='innerFooter'
				>
					<div styleName='footerLeftColumn'>
						<p>
							{$soundsVinyl}
						</p>
					</div>
					<div styleName='footerRightColumn'>
						<FooterUnorderedList />
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;
