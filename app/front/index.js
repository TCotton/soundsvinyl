import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';

import '../assets/sass/index.scss';
import Main from './main';

if (!process.env.production) {
	const a11y = require('react-a11y').default
	a11y(React, ReactDOM, {
		rules: {
			'img-uses-alt': 'warn'
			, 'redundant-alt': [ 'warn', [ 'image', 'photo', 'foto', 'bild' ]]
		}
	})
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={ Main }>
		</Route>
	</Router>,
	document.getElementById('root'));
