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
import CommentsPolicy from './Comments/CommentsPolicy';

export default class Wrapper extends Component {

	render () {
		return (
			<div className='wrapper'>
				<ErrorBoundary>
					<Nav/>
				</ErrorBoundary>
				<Switch>
					<ErrorBoundary>
						<Route
							component={Main}
							exact path='/'
						/>
					</ErrorBoundary>
					<ErrorBoundary>
						<Route
							component={RecordListing}
							exact path='/:slug/:id'
						/>
					</ErrorBoundary>
					<ErrorBoundary>
						<Route
							component={Contact}
							exact path='/contact'
						/>
					</ErrorBoundary>
					<ErrorBoundary>
						<Route
							component={AboutUs}
							exact path='/about-us'
						/>
					</ErrorBoundary>

					<Route
						component={MyAccount}
						exact path='/my-account'
					/>

					<ErrorBoundary>
						<Route
							component={VinylCharts}
							exact path='/vinyl-singles-top-30-chart'
						/>
					</ErrorBoundary>
					<ErrorBoundary>
						<Route
							component={CommentsPolicy}
							exact path='/comments-policy'
						/>
					</ErrorBoundary>
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
					<Footer/>
				</ErrorBoundary>
			</div>
		)
	}

}
