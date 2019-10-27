import React, { Component } from 'react'
import Categories from './Categories/Categories'
import Header from './Header/Header'
import ErrorBoundary from './errorBoundaries/ErrorBoundary'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

class Main extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string,
				tag: PropTypes.string
			})
		})
	}

	static defaultProps = {
		match: {
			params: {
				id: ''
			}
		}
	}

	render () {
		const {
			match: {
				params: { tag }
			}
		} = this.props;

		return (
			<div>
				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<ErrorBoundary>
					<Categories category={tag} />
				</ErrorBoundary>
			</div>
		)
	}
}

export default withRouter(Main)
