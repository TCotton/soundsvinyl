import React, { Component } from 'react'
import './footer.scss'
import PropTypes from 'prop-types'

export default class FooterListElement extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired
	}

	constructor (props) {
		super(props)
	}

	render () {
		const { text } = this.props

		return <li>{text}</li>
	}
}
