import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';

class Main extends Component {

	render () {
		return (
			<div>
				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<ErrorBoundary>
					<Categories />
				</ErrorBoundary>
			</div>
		)
	}
}

export default Main;


