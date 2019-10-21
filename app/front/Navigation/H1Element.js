import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

export default class H1Element extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired
	}

	render () {
		const { text } = this.props

		return (
			<a
				aria-label='Home page'
				href='/'
			>
				<h1>
					{text}
				</h1>
			</a>
		)
	}
}
