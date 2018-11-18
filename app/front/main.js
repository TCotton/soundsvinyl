import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';

class Main extends Component {

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
						catgegory={tag}
					/>
				</ErrorBoundary>
			</div>
		)
	}
}

export default Main;


