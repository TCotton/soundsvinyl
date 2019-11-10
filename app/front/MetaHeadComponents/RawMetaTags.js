import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class MetaHeader extends PureComponent {
	static propTypes = {
		canonical: PropTypes.string,
		title: PropTypes.string
	}

	static defaultProps = {
		canonical: '',
		title: 'Vinyl forever, music for all'
	}

	componentDidMount () {
		const { title, canonical } = this.props;

		if (document.title) {
			document.title = `Soundsvinyl.co: ${title}`
		}

		if (document.querySelector('link[rel=\'canonical\']')) {
			document.querySelector('link[rel=\'canonical\']').href = `https://soundsvinyl.co/${canonical}`;
		}
	}

	componentWillUnmount () {
		if (document.title) {
			document.title = `Soundsvinyl.co: Vinyl forever, music for all`
		}

		if (document.querySelector('link[rel=\'canonical\']')) {
			document.querySelector('link[rel=\'canonical\']').href = 'https://soundsvinyl.co/';
		}
	}

	render () {
		const { title, canonical } = this.props

		return (
			<React.Fragment>
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
			</React.Fragment>
		)
	}
}

export default MetaHeader
