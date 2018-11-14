import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Header from './Header/Header';

class Main extends Component {

	render () {
		return (
			<div>
				<Header />
				<Categories />
			</div>
		)
	}
}

export default Main;


