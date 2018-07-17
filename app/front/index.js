import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../assets/sass/index.scss';
import Main from './main';
import RecordListing from './recordListing';
import Error from './error';
import Footer from './footer'
import Nav from './nav';
import Contact from './contact';
import AboutUs from './about';
import MyAccount from './account';

if (!process.env.production) {
	const a11y = require('react-a11y').default;
	a11y(React, ReactDOM, {
		rules: {
			'img-uses-alt': 'warn'
			, 'redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']]
		}
	})
}

export default class rootComponent extends React.Component {
	render () {
		return (
			<Router>
				<div className='wrapper'>
					<Nav/>
					<Switch>
						<Route exact path='/' component={Main}/>
						<Route path='/vinyl/:id' component={RecordListing}/>
						<Route exact path='/contact' component={Contact}/>
						<Route exact path='/about-us' component={AboutUs}/>
						<Route exact path='/my-account' component={MyAccount}/>
						<Route path='' component={Error}/>
					</Switch>
					<Footer/>
				</div>
			</Router>
		);
	}
}
