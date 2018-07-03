<template>
	<footer>
		&nbsp;<p>This is a footer</p>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		mounted () {
			console.log('Simple Footer Component mounted.');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
</style>
