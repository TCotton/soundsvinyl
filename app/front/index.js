/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import store from './store/store'
import './misc/oauth'

import '../assets/sass/index.scss'
import Wrapper from './Wrapper'

if ('scrollRestoration' in window.history) {
	window.history.scrollRestoration = 'manual';
}

export default class rootComponent extends Component {
	render () {
		return (
			<React.StrictMode>
				<Provider store={store}>
					<CookiesProvider>
						<Router>
							<Wrapper />
						</Router>
					</CookiesProvider>
				</Provider>
			</React.StrictMode>
		)
	}
}
/* eslint-enable react/jsx-max-depth */
