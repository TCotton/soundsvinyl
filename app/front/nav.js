import React from 'react';
import index from './nav.scss';

class Nav extends React.Component {
	render () {
		return (
			<nav>
			<div className={index.navLeftColumn}>
				<h1>soundsvinyl.co</h1>
			</div>
			<div className={index.navRightColumn}>
				<ul>
					<a href='/'>
						<li>
							Vinyl
						</li>
					</a>
					<a href='/'>
						<li>
							About
						</li>
					</a>
					<a href='/'>
						<li>
							Data
						</li>
					</a>
					<a href='/'>
						<li>
							Contact
						</li>
					</a>
					<a href='/'>
						<li>
							My account
						</li>
					</a>
				</ul>
			</div>
			</nav>
		)
	}
}

export default Nav;
