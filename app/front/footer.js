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
									Current top 30 vinyl singles chart
								</li>
							</a>
							<a href='https://github.com/TCotton/soundsvinyl' rel='noreferrer'>
								<li>
									Code (CC BY-NC 4.0 license)
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
