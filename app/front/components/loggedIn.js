import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginButton (props) {
	return (
		<Link to='/' onClick={props.onClick}>
			<li>
				Logout
			</li>
		</Link>
	);
}

LoginButton.propTypes = {
	onClick: PropTypes.func,
};

export default LoginButton;
