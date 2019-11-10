import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

export default class ListElement extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired
	}

	shouldComponentUpdate() {
		return false;
	}

	render () {
		const { text } = this.props

		return (
			<li>
				<span>
					{text}
				</span>
			</li>
		)
	}
}
