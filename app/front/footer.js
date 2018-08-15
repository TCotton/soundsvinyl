import React from 'react';
import { Link } from 'react-router-dom';
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
							<Link to='/vinyl-singles-top-30-chart'>
								<li>
									Current top 30 vinyl singles chart
								</li>
							</Link>
							<Link to='/sitemap'>
								<li>
									Sitemap
								</li>
							</Link>
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
