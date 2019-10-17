import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RawTwitterMetaTags extends Component {
	static propTypes = {
		description: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}

	componentDidMount () {
		const { title, description } = this.props

		if (document.querySelector("meta[name='twitter:title']")) {
			document.querySelector("meta[name='twitter:title']").content = title
		}

		if (document.querySelector("meta[name='twitter:description']")) {
			document.querySelector(
				"meta[name='twitter:description']"
			).content = description
		}
	}

	componentWillUnmount () {
		if (document.querySelector("meta[name='twitter:title']")) {
			document.querySelector("meta[name='twitter:title']").content = ''
		}

		if (document.querySelector("meta[name='twitter:description']")) {
			document.querySelector("meta[name='twitter:description']").content = ''
		}
	}

	render () {
		const { title, description } = this.props

		return (
			<React.Fragment>
				<meta content='summary' name='twitter:card' />
				<meta content='@andywalpole' name='twitter:site' />
				<meta content={title} name='twitter:title' />
				<meta content={description} name='twitter:description' />
			</React.Fragment>
		)
	}
}

export default RawTwitterMetaTags
