import React, { Component } from 'react'
import './footer.scss'
import PropTypes from 'prop-types'

export default class FooterListElement extends Component {
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
				{text}
			</li>
		)
	}
}
