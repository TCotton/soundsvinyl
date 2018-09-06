import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './misc/oauth';

import '../assets/sass/index.scss';
import Main from './main';
import RecordListing from './recordListing';
import Error from './error';
import Footer from './footer'
import Nav from './nav';
import Contact from './contact';
import AboutUs from './about';
import MyAccount from './account';
import VinylCharts from './vinylCharts';
import Sitemap from './sitemap';

import { setSearchText } from './actions/actions';
import { configure as store } from './store/configureStore';

store.subscribe(() => {
	console.log('new store', store.getState());
});

// store.dispatch(setSearchText('This is a new search term'));

export default class rootComponent extends React.Component {
	render () {
		return (
			<CookiesProvider>
				<Router>
					<div className='wrapper'>
						<Nav/>
						<Switch>
							<Route exact path='/' component={Main}/>
							<Route exact path='/:slug/:id' component={RecordListing}/>
							<Route exact path='/contact' component={Contact}/>
							<Route exact path='/about-us' component={AboutUs}/>
							<Route exact path='/my-account' component={MyAccount}/>
							<Route exact path='/vinyl-singles-top-30-chart' component={VinylCharts}/>
							<Route exact path='/sitemap' component={Sitemap}/>
							<Route path='' component={Error}/>
						</Switch>
						<Footer/>
					</div>
				</Router>
			</CookiesProvider>
		);
	}
}
