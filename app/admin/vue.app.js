import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import VueRootComponent from './whatever';
console.dir(VueRootComponent);

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#root',
		data: {
			message: 'Welcome to the admin section'
		},
		template: '<div>{{message}}</div>'
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
