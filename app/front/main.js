import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';

class Main extends Component {

	constructor ( props ) {
		super( props );
		console.dir(this.props.match.params.tag);
	}

	render () {




		return (
			<div>
				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<ErrorBoundary>

				</ErrorBoundary>
			</div>
		)
	}
}

export default Main;


