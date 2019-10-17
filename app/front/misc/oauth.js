import axios from 'axios'
import { getCookieValue } from '../../helper_functions'

axios.interceptors.request.use(
	config => {
		const token = getCookieValue('token')

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	err => {
		return Promise.reject(err)
	}
)
