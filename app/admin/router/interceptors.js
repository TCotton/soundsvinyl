import Vue from 'vue';

Vue.http.interceptors.push(function(request) {
	// modify headers
	const token = window.localStorage.token
	request.headers.set('Authorization', `Bearer ${token}`);
});
