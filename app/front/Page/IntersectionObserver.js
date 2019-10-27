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
		const { children } = this.props;
		const THRESHOLD = [0.25, 0.5, 0.75];

		return (
			<InView triggerOnce={true} threshold={THRESHOLD} rootMargin={'200px 0px'} onChange={( inView, entry ) => console.log( 'Inview:', inView, 'Entry', entry)}>
				{( { inView, ref, entry } ) => (
					<span ref={ref} >
						{children}
					</span>
				)}
			</InView>
		)
	}
}
