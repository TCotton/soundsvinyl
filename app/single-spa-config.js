// single-spa-config.js
import { registerApplication, start } from '../node_modules/single-spa/lib/single-spa';

registerApplication('react', () => {
	return import('./front/react.app.js');
}, () => {
	return !location.href.endsWith('admin');
});

registerApplication('vue', () => {
	return import('./admin/vue.app.js');
}, () => {
	return location.href.endsWith('admin');
});

start();

