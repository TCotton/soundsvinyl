import React from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import LogoutButton from './components/logged0ut';
import LoginButton from './components/loggedIn';
import './nav.scss';

class Nav extends React.Component {

	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	};

	constructor (props) {
		super(props);

		const { cookies } = props;

		this.state = {
			isClicked: false,
			loggedIn: cookies.get('token') || false,
		};

		this.handleClicked = this.handleClicked.bind(this);
		this.logout = this.logout.bind(this);
	}

	logout() {
		const { cookies } = this.props;

		cookies.remove('token');
		this.setState({
			loggedIn: cookies.get('token') || false,
		});
	}

	handleClicked () {
		this.setState({
			isClicked: !this.state.isClicked
		});
	}

	render () {

		const ulClassName = this.state.isClicked ? 'display-menu' : 'no-menu';
		const navClasses = cn('inner-header', 'wrapper');

		const isLoggedIn = this.state.loggedIn;
		let button;

		if (isLoggedIn) {
			button = <LoginButton onClick={this.logout} />;
		} else {
			button = <LogoutButton />;
		}

		return (
			<nav>
				<div styleName='innerNav' className={navClasses}>
					<div styleName='navLeftColumn'>
						<Link to='/'>
							<h1>soundsvinyl.co</h1>
						</Link>
					</div>
					<div styleName='navRightColumn'>
						<label htmlFor='toggle-1' className='hidden-desktop'>Main Menu</label>
						<input type='checkbox' id='toggle-1' className='hidden-desktop' onChange={this.handleClicked}/>
						<div styleName='closeMenu' className={cn('hidden-desktop', ulClassName)} onClick={this.handleClicked}/>
						<ul className={ulClassName}>
							<Link to='/'>
								<li>
									<span>
									Home
									</span>
								</li>
							</Link>
							<Link to='/about-us'>
								<li>
									<span>
									About
									</span>
								</li>
							</Link>
							<Link to='/contact'>
								<li>
									<span>
									Contact
									</span>
								</li>
							</Link>
							{button}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default withCookies(Nav);
