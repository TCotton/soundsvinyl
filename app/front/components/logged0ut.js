import React from 'react';
import { Link } from 'react-router-dom';

function LogoutButton () {
	return (
		<Link to='/my-account'>
			<li>
				{'My account'}
			</li>
		</Link>
	);
}

export default LogoutButton;

