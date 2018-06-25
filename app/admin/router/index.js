import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Pages from '../components/Pages';
import Page from '../components/Page';
import Users from '../components/Users';
import User from '../components/User';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/admin',
			name: 'HelloWorld',
			component: HelloWorld
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
		}
	]
})
