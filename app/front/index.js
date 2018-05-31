import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';

import '../assets/sass/index.scss';
import Main from './main';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={ Main }>
		</Route>
	</Router>,
	document.getElementById('root'));
