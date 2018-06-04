import React from 'react';

import Nav from './nav';
import Header from './header';

import universal from '../assets/sass/univseral_classes.scss';

class Main extends React.Component {

	render () {
		return (
			<div className={universal.wrapper}>
				<Nav />
				<Header />
				<h1>Here is the site</h1>
				<p>This is a paragraph</p>
			</div>
		)
	}
}

export default Main;


