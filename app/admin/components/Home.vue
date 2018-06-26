<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li> <router-link to="/admin/pages">List of pages</router-link> </li>
			<li> <router-link to="/admin/users">List of users</router-link> </li>
			<li> <router-link to="/admin/add-page">Add a page</router-link> </li>
			<li> <router-link to="/admin/add-user">Add a user</router-link> </li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data () {
			return {
				msg: 'Welcome to Your Homepage',
			}
		},
		mounted () {
			console.log('the Hello World is mounted');
		}
	}
</script>

<style lang="scss" data-module>
	@import '../../assets/sass/tools';

	ul {
		li {
			display: inline-block;
		}
	}
</style>
