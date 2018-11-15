import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogoutButton extends Component {
	render() {
		return (
			<Link to='/my-account'>
				<li>
					{'My account'}
				</li>
			</Link>
		)
	}
}

export default LogoutButton;

