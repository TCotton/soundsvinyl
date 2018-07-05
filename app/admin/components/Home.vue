<template>
	<div :class="$style.hello">
		<h2>{{ msg }}</h2>
		<h3>Essential Links</h3>
		<ul>
			<li> <router-link to="/admin/pages">List of pages</router-link> </li>
			<li> <router-link to="/admin/users">List of users</router-link> </li>
			<li> <router-link to="/admin/comments">List of comments</router-link> </li>
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
		beforeCreate () {
			return true;
		},
		created () {
			return true;
		},
		beforeMount() {
			return true;
		},
		mounted () {
			console.log('the Hello World is mounted');
		},
		beforeUpdate () {
			return true;
		},
		updated () {
			return true;
		},
		beforeDestroy () {
			return true;
		},
		destroyed () {
			return true;
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.homepage {
		background: transparent;
	}

	ul {
		li {
			@include font-calculator($font_family_body, 16px, 0);
			display: block;
		}
	}
</style>
