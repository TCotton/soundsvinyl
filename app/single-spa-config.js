// single-spa-config.js
import * as singleSpa from 'single-spa'
import { findRootElement } from './helper_functions'

singleSpa.registerApplication(
	'react',
	() => {
		return import('./front/react.app.js')
	},
	() => {
		findRootElement()
		return (
			location.href.includes('about-us') || !location.href.includes('admin')
		)
	}
)

singleSpa.registerApplication(
	'vue',
	() => {
		return import('./admin/vue.app.js')
	},
	() => {
		return location.href.includes('admin')
	}
)

singleSpa.start()
