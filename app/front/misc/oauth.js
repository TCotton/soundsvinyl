import axios from 'axios';
// You can use any cookie library or whatever
// library to access your client storage.
import { getCookieValue } from '../../helper_functions';

axios.interceptors.request.use((config) => {
	const token = getCookieValue('token');

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
}, (err) => {
	return Promise.reject(err);
});
