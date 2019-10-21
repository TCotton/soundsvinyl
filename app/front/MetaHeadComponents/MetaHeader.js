import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

class MetaHeader extends Component {
	static propTypes = {
		canonical: PropTypes.string,
		title: PropTypes.string
	}

	static defaultProps = {
		canonical: '',
		title: 'Vinyl forever, music for all'
	}

	render () {
		const { title, canonical } = this.props

		return (
			<Helmet>
				<title>
					{'Soundsvinyl.co: '}
					{title}
				</title>
				{canonical.length > 0 && (
					<link
						href={`https://soundsvinyl.co/${canonical}`}
						rel='canonical'
					/>
				)}
			</Helmet>
		)
	}
}

export default MetaHeader
