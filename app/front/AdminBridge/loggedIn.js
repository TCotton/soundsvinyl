import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginButton (props) {
	const { onClick } = props;
	return (
		<Link
			onClick={onClick}
			to='/'
		>
			<li>
				<span>
					{'Logout'}
				</span>
			</li>
		</Link>
	);
}

LoginButton.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default LoginButton;
