import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import VuePaginate from 'vue-paginate';
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

Vue.use(Router);
Vue.use(VuePaginate);
Vue.use(VueResource);

export default new Router({
	routes: [
		{
			path: '/admin',
			name: 'Home',
			components: {
				default: Home,
				Header: Header,
				Footer: Footer,
			}
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
})
