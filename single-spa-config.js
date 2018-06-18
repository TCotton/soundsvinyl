// single-spa-config.js
import { declareChildApplication, start } from 'single-spa';

declareChildApplication('react', () => import('./app/front/react.app.js'), () => location.pathname === '');
start();

function pathPrefix(prefix) {
	return function(location) {
		return location.pathname.indexOf(`${prefix}`) === 0;
	}
}

