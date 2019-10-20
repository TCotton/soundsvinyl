import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function LoginButton (props) {
	const { onClick } = props
	const $Logout = 'logout'
	return (
		<Link
			onClick={onClick}
			to='/'
		>
			<li>
				<span>
					{$Logout}
				</span>
			</li>
		</Link>
	)
}

LoginButton.propTypes = {
	onClick: PropTypes.func // eslint-disable-line react/require-default-props
} // DON NOT change the above eslint variation

export default LoginButton
