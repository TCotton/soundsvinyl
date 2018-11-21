import React, { Component } from 'react';
import './header.scss';
import HeaderLeftColumn from './HeaderLeftColumn';

export default class Header extends Component {
	render () {
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
							{'Welcome to SoundsVinyl'}
						</h2>
						<p>
							{'Vinyl forever, music for all'}
						</p>
					</div>
				</div>
			</header>
		)
	}
}
