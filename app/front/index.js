import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './misc/oauth';

import '../assets/sass/index.scss';
import Wrapper from './Wrapper';

/*import { setSearchText } from './actions/actions';
import { store } from './store/configureStore';

store.subscribe(() => {
	console.log('new store', store.getState());
});

store.dispatch(setSearchText('This is a new search term'));*/

export default class rootComponent extends Component {
	render () {
		return (
			<CookiesProvider>
				<Router>
					<Wrapper />
				</Router>
			</CookiesProvider>
		);
	}
}
