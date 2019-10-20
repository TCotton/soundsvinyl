import React, { Component } from 'react'
import './header.scss'
import HeaderLeftColumn from './HeaderLeftColumn'

export default class Header extends Component {
	render () {
		const $Welcome = 'Welcome to SoundsVinyl'
		const $Vinyl = 'Vinyl forever, music for all'

		return (
			<header styleName='header'>
				<div
					className='wrapper'
					styleName='innerHeader'
				>
					<div styleName='headerLeftColumn'>
						<HeaderLeftColumn />
					</div>
					<div styleName='headerRightColumn'>
						<h2>
							{$Welcome}
						</h2>
						<p>
							{$Vinyl}
						</p>
					</div>
				</div>
			</header>
		)
	}
}
