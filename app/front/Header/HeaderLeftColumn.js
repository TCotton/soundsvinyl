import React, { Component } from 'react'
import './header.scss'
import Turntable from '../../assets/icons/Turntable'

export default class HeaderLeftColumn extends Component {
	render () {
		return (
			<a
				aria-label='Home page'
				href='/'
			>
				<div styleName='headerSVG'>
					<Turntable />
				</div>
			</a>
		)
	}
}
