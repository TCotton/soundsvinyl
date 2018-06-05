import React from 'react';
import './footer.scss';
import cn from 'classnames';

class Footer extends React.Component {
	render () {

		const footerClasses = cn('inner-footer', 'wrapper');

		return (
			<footer>
				<div styleName='innerFooter' className={footerClasses}>
					<div styleName='footerLeftColumn'>
						<p>soundsvinyl.co</p>
					</div>
					<div styleName='footerRightColumn'>
						<ul>
							<a href='/'>
								<li>
									Link one
								</li>
							</a>
							<a href='/'>
								<li>
									Link two
								</li>
							</a>
						</ul>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;
