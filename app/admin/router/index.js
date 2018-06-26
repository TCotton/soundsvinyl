import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Pages from '../components/Pages';
import Page from '../components/Page';
import Users from '../components/Users';
import User from '../components/User';
import AddUser from '../components/AddUser';
import AddPage from '../components/AddPage';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/admin',
			name: 'Home',
			component: Home
		},
		{
			path: '/admin/pages',
			name: 'Pages',
			component: Pages
		},
		{
			path: '/admin/pages/:id',
			name: 'Page',
			component: Page
		},
		{
			path: '/admin/users',
			name: 'Users',
			component: Users
		},
		{
			path: '/admin/users/:id',
			name: 'User',
			component: User
		},
		{
			path: '/admin/add-user',
			name: 'AddUser',
			component: AddUser
		},
		{
			path: '/admin/add-page',
			name: 'AddPage',
			component: AddPage
		}
	]
})
