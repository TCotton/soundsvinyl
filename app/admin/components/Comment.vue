<template>
	<div :class="$style.comment">

		<h2>{{ msg }}</h2>

	</div>
</template>

<script>
	export default {
		name: 'Comment',
		data () {
			return {
				msg: 'Welcome to the comment page',
				paginate: ['Comments'],
				Comments: []
			}
		},
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.comment {
		background: transparent;
	}
</style>
