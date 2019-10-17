import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

export default class H1Element extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired
	}

	constructor (props) {
		super(props)
	}

	render () {
		const { text } = this.props

		return (
			<a href='/'>
				<h1>{text}</h1>
			</a>
		)
	}
}
