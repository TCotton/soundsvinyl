<template>
	<div :class="$style.addPage">
		&nbsp;&nbsp;
	</div>
</template>

<script>
	export default {
		name: 'AddPage',
		data () {
			return {
				msg: 'Welcome to Add Page section'
			}
		},
		mounted() {
			console.log('the add page section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.addPage {
		background: transparent;
	}
</style>
