import Vue from 'vue';
import Router from 'vue-router';
import VueSuperagent from 'vue-superagent'
import Home from '../components/Home';
import Pages from '../components/Pages';
import Page from '../components/Page';
import Users from '../components/Users';
import User from '../components/User';
import AddUser from '../components/AddUser';
import AddPage from '../components/AddPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

Vue.use(Router, VueSuperagent);

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
		}
	]
})
