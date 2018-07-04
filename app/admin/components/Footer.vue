<template>
	<footer :class="$style.footer">
		&nbsp;<p>This is a footer</p>
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
		padding: 0 0 20px 0;
		text-align: center;
		p {
			@include font-calculator($font_family_body, 12px, 0);
		}
	}
</style>
