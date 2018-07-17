import React from 'react';
import './nav.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
	constructor () {
		super();
		this.state = {
			isClicked: false,
		};
		this.handleClicked = this.handleClicked.bind(this);
	}

	handleClicked () {
		this.setState({
			isClicked: !this.state.isClicked
		});
	}

	render () {

		const ulClassName = this.state.isClicked ? 'display-menu' : 'no-menu';
		const navClasses = cn('inner-header', 'wrapper');

		return (
			<nav>
				<div styleName='innerNav' className={navClasses}>
					<div styleName='navLeftColumn'>
						<h1>soundsvinyl.co</h1>
					</div>
					<div styleName='navRightColumn'>
						<label htmlFor='toggle-1' className='hidden-desktop'>Main Menu</label>
						<input type='checkbox' id='toggle-1' className='hidden-desktop' onChange={this.handleClicked}/>
						<div styleName='closeMenu' className={cn('hidden-desktop', ulClassName)} onClick={this.handleClicked}/>
						<ul className={ulClassName}>
							<Link to='/'>
								<li>
									Home
								</li>
							</Link>
							<Link to='/about-us'>
								<li>
									About
								</li>
							</Link>
							<Link to='/contact'>
								<li>
									Contact
								</li>
							</Link>
							<Link to='/my-account'>
								<li>
									My account
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Nav;
