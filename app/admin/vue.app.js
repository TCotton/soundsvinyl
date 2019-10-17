import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './index'
import Page from './components/Page'
import router from './router'
import '../assets/sass/index.scss'

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#root',
		router,
		components: {
			App,
			page: Page
		},
		template: '<App/>'
	}
})

export const bootstrap = [vueLifecycles.bootstrap]

export const mount = [vueLifecycles.mount]

export const unmount = [vueLifecycles.unmount]

Vue.router = router
