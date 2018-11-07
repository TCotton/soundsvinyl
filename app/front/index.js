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

/*import { setSearchText } from './actions/actions';
import { store } from './store/configureStore';

store.subscribe(() => {
	console.log('new store', store.getState());
});

store.dispatch(setSearchText('This is a new search term'));*/

export default class rootComponent extends React.Component {
	render () {
		return (
			<CookiesProvider>
				<Router>
					<div className='wrapper'>
						<Nav />
						<Switch>
							<Route
								component={Main}
								exact path='/' // eslint-disable-line react/jsx-max-props-per-line
							/>
							<Route
								component={RecordListing}
								exact path='/:slug/:id' // eslint-disable-line react/jsx-max-props-per-line
							/>
							<Route
								component={Contact}
								exact path='/contact' // eslint-disable-line react/jsx-max-props-per-line
							/>
							<Route
								component={AboutUs}
								exact path='/about-us' // eslint-disable-line react/jsx-max-props-per-line
							/>
							<Route
								component={MyAccount}
								exact path='/my-account' // eslint-disable-line react/jsx-max-props-per-line
							/>
							<Route
								component={VinylCharts}
								exact path='/vinyl-singles-top-30-chart' // eslint-disable-line react/jsx-max-props-per-line
							/>
							<Route
								component={Sitemap}
								exact path='/sitemap'  // eslint-disable-line react/jsx-max-props-per-line
							/>
							<Route
								component={Error}
								path=''
							/>
						</Switch>
						<Footer />
					</div>
				</Router>
			</CookiesProvider>
		);
	}
}
