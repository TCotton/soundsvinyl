import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import VuePaginate from 'vue-paginate';
import VeeValidate from 'vee-validate';
import VueCookies from 'vue-cookies';
import Home from '../components/Home';
import Pages from '../components/Pages';
import Page from '../components/Page';
import Users from '../components/Users';
import User from '../components/User';
import AddUser from '../components/AddUser';
import AddPage from '../components/AddPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Comments from '../components/Comments';
import Comment from '../components/Comment';
import '../components/Modal';
import '../components/jsComponents/ThumbnailComponent';

Vue.use(Router);
Vue.use(VuePaginate);
Vue.use(VueResource);
Vue.use(VueCookies);
Vue.use(VeeValidate);

const root = window.location.protocol + '//' + window.location.hostname + ':8443' + '/apiV1/';
Vue.http.options.root = root;
// do i *really* need this??
Vue.http.options.emulateJSON = true;

function getCookieValue (a) {
	const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}

Vue.http.interceptors.push(function(request) {
	// modify headers
	const token = getCookieValue('token');
	request.headers.set('Authorization', `Bearer ${token}`);
});

const router = new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/admin',
			name: 'Home',
			components: {
				default: Home,
				Header: Header,
				Footer: Footer,
			},
		},
		{
			path: '/admin/pages',
			name: 'Pages',
			components: {
				default: Pages,
				Header: Header,
				Footer: Footer,
			}
		},
		{
			path: '/admin/pages/:id',
			name: 'Page',
			components: {
				default: Page,
				Header: Header,
				Footer: Footer,
			}
		},
		{
			path: '/admin/users',
			name: 'Users',
			components: {
				default: Users,
				Header: Header,
				Footer: Footer,
			}
		},
		{
			path: '/admin/users/:id',
			name: 'User',
			components: {
				default: User,
				Header: Header,
				Footer: Footer,
			}
		},
		{
			path: '/admin/add-user',
			name: 'AddUser',
			components: {
				default: AddUser,
				Header: Header,
				Footer: Footer,
			}
		},
		{
			path: '/admin/add-page',
			name: 'AddPage',
			components: {
				default: AddPage,
				Header: Header,
				Footer: Footer,
			}
		},
		{
			path: '/admin/comments',
			name: 'Comments',
			components: {
				default: Comments,
				Header: Header,
				Footer: Footer,
			}
		},
		{
			path: '/admin/comment/:id',
			name: 'Comment',
			components: {
				default: Comment,
				Header: Header,
				Footer: Footer,
			}
		}
	]
});

/**
 * This is a poor man's authentication system, to be removed when server-side rendering is used
 * BEFORE, the page is loaded in the admin section a POST call is being made to verify the JWT token
 * This should be done as a header and with a regular request
 */

router.beforeEach((to, from, next) => {

	const oReq = new XMLHttpRequest();
	const token = getCookieValue('token');
	oReq.open('POST', `${root}jwt/generate`);
	//Send the proper header information along with the request
	oReq.setRequestHeader('Content-Type', 'application/json');

	oReq.onreadystatechange = function () {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 403) {
			document.location.href = '/';
		}
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			next();
		}
	}

	try {
		oReq.send(JSON.stringify({token: token}));
	}
	catch (e) {
		document.location.href = '/';
	}
})

export default router;

