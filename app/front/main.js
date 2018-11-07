import React from 'react';

import CategoriesHomepage from './categoriesHomepage';
import Header from './header';

class Main extends React.Component {

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


