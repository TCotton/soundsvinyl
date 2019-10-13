import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import cn from 'classnames';
import LogoutButton from '../AdminBridge/logged0ut';
import LoginButton from '../AdminBridge/loggedIn';
import './nav.scss';
import UnorderedList from './UnorderedList';
import H1Element from './H1Element';

class Nav extends Component {

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

	componentDidUpdate ( prevProps, prevState ) {
		const { isClicked } = this.state;

		if( isClicked === prevState.isClicked && isClicked ) {
			this.setState( { // eslint-disable-line react/no-did-update-set-state
				isClicked: !isClicked
			} );
		}
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
		let button = null;

		if (isLoggedIn) {
			button = <LoginButton onClick={this.handleLogout} />;
		} else {
			button = <LogoutButton />;
		}

		const mainMenu = 'Main Menu';

		return (
			<nav>
				<div
					className={navClasses}
					styleName='innerNav'
				>
					<div styleName='navLeftColumn'>
						<H1Element
							text='SoundsVinyl'
						/>
					</div>
					<div styleName='navRightColumn'>
						<label
							className='hidden-desktop'
							htmlFor='toggle-1'
						>
							{mainMenu}
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
						<UnorderedList
							buttonElement={button}
							isClicked={ulClassName}
						/>
					</div>
				</div>
			</nav>
		)
	}
}

export default withCookies(Nav);
