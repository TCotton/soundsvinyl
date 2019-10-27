import { InView } from 'react-intersection-observer'
import React from 'react';
import PropTypes from 'prop-types'

export default class IntersectionObserver extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType( [
			PropTypes.arrayOf( PropTypes.node ),
			PropTypes.node
		] ).isRequired
	}

	render () {
		const { children } = this.props

		return (
			<InView>
				{( { inView, ref, entry } ) => (
					<span ref={ref}  onChange={( inView, entry ) => console.log( 'Inview:', inView, 'Entry', entry)}>
						{children}
					</span>
				)}
			</InView>
		)
	}
}
