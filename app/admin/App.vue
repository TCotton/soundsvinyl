<template>
	<div id="root">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	@import '../assets/sass/tools';
	@import '../assets/sass/starter';
	#root {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
