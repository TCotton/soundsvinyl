<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li>Here is the list</li>
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

<style lang="scss" module>
	@import '../../assets/sass/tools';
</style>
