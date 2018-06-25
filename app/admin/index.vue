<template>
	<div id="root">
		<router-view />
		<p :class="$style.whatever">
			This should be red
		</p>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss" module>
	@import '../assets/sass/tools';
	.whatever {
		background: red;
	}
</style>
