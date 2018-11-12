/* eslint-disable react/jsx-max-props-per-line */
import React, { Component } from 'react';
import Nav from './Navigation/Nav';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import RecordListing from './recordListing';
import Contact from './Contact/Contact';
import AboutUs from './about';
import MyAccount from './Account/MyAccount';
import VinylCharts from './vinylCharts';
import Sitemap from './Sitemap/Sitemap';
import Error from './error';
import Footer from './Footer/Footer';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';

export default class Wrapper extends Component {

	render () {
		return (
			<div className='wrapper'>
				<ErrorBoundary>
					<Nav />
				</ErrorBoundary>
				<Switch>
					<Route
						component={Main}
						exact path='/'
					/>
					<Route
						component={RecordListing}
						exact path='/:slug/:id'
					/>
					<Route
						component={Contact}
						exact path='/contact'
					/>
					<Route
						component={AboutUs}
						exact path='/about-us'
					/>
					<Route
						component={MyAccount}
						exact path='/my-account'
					/>
					<Route
						component={VinylCharts}
						exact path='/vinyl-singles-top-30-chart'
					/>
					<ErrorBoundary>
						<Route
							component={Sitemap}
							exact path='/sitemap'
						/>
					</ErrorBoundary>
					<Route
						component={Error}
						path=''
					/>
				</Switch>
				<ErrorBoundary>
					<Footer />
				</ErrorBoundary>
			</div>
		)
	}

}
