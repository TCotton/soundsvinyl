<template>
	<div :class="$style.page">
		<h1>{{ msg }}</h1>
		<h2>Page</h2>
		<p>This is a page</p>
	</div>
</template>

<script>
	export default {
		name: 'Page',
		data () {
			return {
				msg: 'Welcome to Your Page section'
			}
		},
		mounted() {
			console.log('the page section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
	.page {
		background: transparent;
	}
</style>
