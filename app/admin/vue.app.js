import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

console.log('VUE');

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#root',
		template: '<div>some template</div>'
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
