import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends Component {

	constructor (props) {
		super(props);

		this.handleOnClick = this.handleOnClick.bind( this );
	}

	handleOnClick(e) {
		e.preventDefault();
	}

	render () {

		return (
			<Link
				onClick={this.handleOnClick}
				to='/'
			>
				<li>
					<span>
						{'Logout'}
					</span>
				</li>
			</Link>
		)
	}
}

export default LoginButton;
