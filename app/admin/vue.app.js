import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {

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
