<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Pages</h2>
		<ul>
			<li>here is the list</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Pages',
		data () {
			return {
				msg: 'Welcome to Your Pages section'
			}
		},
		mounted() {
			console.log('the pages section is mounted');
		}
	}
</script>

<style lang="scss" data-module>
	@import '../../assets/sass/tools';
</style>

