import React from 'react';

import Nav from './nav';
import Header from './header';
import CategoriesHomepage from './categoriesHomepage';
import Footer from './footer';

class Main extends React.Component {

	render () {
		return (
			<div className='wrapper'>
				<Nav />
				<Header />
				<CategoriesHomepage />
				<Footer />
			</div>
		)
	}
}

export default Main;


