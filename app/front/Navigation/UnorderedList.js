import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListElement from './ListElement'
import './nav.scss'

export default class UnorderedList extends Component {
	static propTypes = {
		buttonElement: PropTypes.oneOfType([PropTypes.node]),
		isClicked: PropTypes.string.isRequired
	}

	static defaultProps = {
		buttonElement: null
	}

	constructor (props) {
		super(props)
	}

	render () {
		const { buttonElement, isClicked } = this.props

		return (
			<ul className={isClicked}>
				<Link to='/'>
					<ListElement text='Home' />
				</Link>
				<Link to='/about-us'>
					<ListElement text='About' />
				</Link>
				<Link to='/contact'>
					<ListElement text='Contact' />
				</Link>
				{buttonElement}
			</ul>
		)
	}
}
