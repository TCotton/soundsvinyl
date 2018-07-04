<template>
	<div :class="$style.comment">

		<h1>{{ msg }}</h1>

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
