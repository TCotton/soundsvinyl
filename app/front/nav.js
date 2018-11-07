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
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		const { cookies } = this.props;

		cookies.remove('token');
		this.setState({
			loggedIn: cookies.get('token') || false,
		});
	}

	handleClicked () {

		const { isClicked } = this.state;

		this.setState({
			isClicked: !isClicked
		});
	}

	render () {

		const {
			isClicked,
			loggedIn
		} = this.state;

		const ulClassName = isClicked ? 'display-menu' : 'no-menu';
		const navClasses = cn('inner-header', 'wrapper');

		const isLoggedIn = loggedIn;
		let button;

		if (isLoggedIn) {
			button = <LoginButton onClick={this.handleLogout} />;
		} else {
			button = <LogoutButton />;
		}

		return (
			<nav>
				<div
					className={navClasses}
					styleName='innerNav'
				>
					<div styleName='navLeftColumn'>
						<Link to='/'>
							<h1>
								{'SoundsVinyl'}
							</h1>
						</Link>
					</div>
					<div styleName='navRightColumn'>
						<label
							className='hidden-desktop'
							htmlFor='toggle-1'
						>
							{'Main Menu'}
						</label>
						<input
							className='hidden-desktop'
							id='toggle-1'
							onChange={this.handleClicked}
							type='checkbox'
						/>
						<div
							className={cn('hidden-desktop', ulClassName)}
							onClick={this.handleClicked}
							styleName='closeMenu'
						/>
						<ul className={ulClassName}>
							<Link to='/'>
								<li>
									<span>
										{'Home'}
									</span>
								</li>
							</Link>
							<Link to='/about-us'>
								<li>
									<span>
										{'About'}
									</span>
								</li>
							</Link>
							<Link to='/contact'>
								<li>
									<span>
										{'Contact'}
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
