<template>
	<footer :class="$style.footer">
		&nbsp;<p>Add footer links here</p>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.footer {
		margin: 50px 0 0 0;
		padding: 0 0 20px 0;
		text-align: center;
		background: $footerAdminBackground;
		p {
			@include font-calculator($font_family_body, 12px, 0);
		}
	}
</style>
