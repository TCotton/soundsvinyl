// single-spa-config.js
import { registerApplication, start } from '../node_modules/single-spa/lib/single-spa';
import { findRootElement } from './helper_functions';

registerApplication('react', () => {
	return import('./front/react.app.js');
}, () => {
	findRootElement();
	return location.href.includes('about-us') || !location.href.includes('admin');
});

registerApplication('vue', () => {
	return import('./admin/vue.app.js');
}, () => {
	return location.href.includes('admin');
});

start();


