<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>User</h2>
		<p>This is a user</p>
	</div>
</template>

<script>
	export default {
		name: 'User',
		data () {
			return {
				msg: 'Welcome to Your User section'
			}
		},
		mounted() {
			console.log('the pages section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
</style>
