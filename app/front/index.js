import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../assets/sass/index.scss';
import Main from './main';
import RecordListing from './recordListing';
import Error from './error';
import Footer from './footer'
import Nav from './nav';
import Contact from './contact';
import AboutUs from './about';

if (!process.env.production) {
	const a11y = require('react-a11y').default
	a11y(React, ReactDOM, {
		rules: {
			'img-uses-alt': 'warn'
			, 'redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']]
		}
	})
}

ReactDOM.render(
	<div className='wrapper'>
		<Nav/>
		<Router>
			<Switch>
				<Route exact path='/' component={Main}/>
				<Route path='/vinyl' component={RecordListing}/>
				<Route path='/contact' component={Contact}/>
				<Route path='/about-us' component={AboutUs}/>
				<Route path='' component={Error}/>
			</Switch>
		</Router>
		<Footer/>
	</div>,
	document.getElementById('root'));
