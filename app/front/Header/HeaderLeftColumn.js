import React, { Component } from 'react';
import './header.scss';
import Turntable from '../../assets/icons/Turntable'

export default class HeaderLeftColumn extends Component {
	render () {
		return (
			<React.Fragment>
				<div styleName='headerSVG'>
					<Turntable />
				</div>
			</React.Fragment>
		)
	}
}
