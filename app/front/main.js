import React, { Component } from 'react';

import CategoriesHomepage from './categoriesHomepage';
import Header from './header';

class Main extends Component {

	render () {
		return (
			<div>
				<Header />
				<CategoriesHomepage />
			</div>
		)
	}
}

export default Main;


