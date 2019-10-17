<template>
	<footer :class="$style.footer">
		<p>{{ current }}</p>
	</footer>
</template>

<script>
import moment from 'moment'

export default {
	name: 'FooterAdmin',
	data () {
		return {
			current: ''
		}
	},
	created () {
		this.current = moment().format('h:mm:ss a, MMMM Do YYYY')
	}
}
</script>

<style lang="scss" module>
@import '../../assets/sass/tools';

.footer {
	margin: 50px 0 0 0;
	padding: 10px 0 20px 0;
	text-align: center;
	background: $footerAdminBackground;
	border-top: 1px solid $borderBackgroundOne;
	p {
		@include font-calculator($font_family_body, 11px, 0);
		font-weight: 300;
	}
}
</style>
