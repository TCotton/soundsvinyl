import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';
import PropTypes from 'prop-types'

class Main extends Component {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string
			})
		})
	};

	static defaultProps = {
		match: {
			params: {
				id: ''
			}
		}
	}

	constructor ( props ) {
		super( props );
	}

	render () {
		const { match: { params: { tag } } } = this.props;

		return (
			<div>
				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<ErrorBoundary>
					<Categories
						category={tag}
					/>
				</ErrorBoundary>
			</div>
		)
	}
}

export default Main;


