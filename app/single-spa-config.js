// single-spa-config.js
import { registerApplication, start } from '../node_modules/single-spa/lib/single-spa';
import { findRootElement } from './helper_functions';

registerApplication('react', () => {
	return import('./front/react.app.js');
}, () => {
	findRootElement();
	return !location.href.endsWith('admin');
});

registerApplication('vue', () => {
	return import('./admin/vue.app.js');
}, () => {
	return location.href.endsWith('admin');
});

start();

