<template>
	<footer :class="$style.footer">
		<p> {{ current }} </p>
	</footer>
</template>

<script>
	import moment from 'moment';

	export default {
		name: 'Footer',
		data () {
			return {
				current: '',
			}
		},
		created () {
			this.current = moment().format('h:mm:ss a, MMMM Do YYYY');
		}
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
