import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListElement from './ListElement'
import './nav.scss'

export default class UnorderedList extends Component {
	static propTypes = {
		isClicked: PropTypes.string.isRequired
	}

	render () {
		const { isClicked } = this.props

		return (
			<ul className={isClicked}>
				<Link
					aria-label='Home'
					to='/'
				>
					<ListElement text='Home' />
				</Link>
				<Link
					aria-label='About'
					to='/about-us'
				>
					<ListElement text='About' />
				</Link>
				<Link
					aria-label='Contact'
					to='/contact'
				>
					<ListElement text='Contact' />
				</Link>
			</ul>
		)
	}
}
