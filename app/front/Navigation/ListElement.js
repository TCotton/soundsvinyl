import { PureComponent } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

export default class ListElement extends PureComponent {
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
