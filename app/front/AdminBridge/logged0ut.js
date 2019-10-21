import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LogoutButton extends Component {
	render () {
		const $myAccount = 'My account'
		return (
			<Link to='/my-account'>
				<li>
					{$myAccount}
				</li>
			</Link>
		)
	}
}

export default LogoutButton
