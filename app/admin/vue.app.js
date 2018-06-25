import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App';
import router from './router';

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
