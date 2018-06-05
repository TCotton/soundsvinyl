import React from 'react';

import Nav from './nav';
import Header from './header';
import CategoriesHomepage from './categoriesHomepage';

class Main extends React.Component {

	render () {
		return (
			<div className='wrapper'>
				<Nav />
				<Header />
				<CategoriesHomepage />
			</div>
		)
	}
}

export default Main;


