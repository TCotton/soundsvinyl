import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './index';
import router from './router';
import '../assets/sass/index.scss';

console.log('VUE');

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#root',
		router,
		components: { App },
		template: '<App/>'
	}
});

export const bootstrap = [
	vueLifecycles.bootstrap,
];

export const mount = [
	vueLifecycles.mount,
];

export const unmount = [
	vueLifecycles.unmount,
];
