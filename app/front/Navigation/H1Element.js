import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default class H1Element extends Component {

	static propTypes = {
		text: PropTypes.string.isRequired
	};

	constructor (props) {
		super(props);
	}

	render () {
		const { text } = this.props;

		return (
			<Link to='/'>
				<h1>
					{text}
				</h1>
			</Link>
		)
	}
}
