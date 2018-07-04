<template>
	<div :class="$style.page">
		<h1>{{ msg }}</h1>
		<h2>Page</h2>
		<p>This is a page</p>
	</div>
</template>

<script>
	export default {
		name: 'Page',
		data () {
			return {
				props: {
					_id: {
						type: Number,
						required: true,
					},
					title: {
						type: String,
						required: true,
					},
					subTitle: {
						type: String,
						required: true
					},
					videoLink: {
						type: Number,
						default: true
					},
					description: {
						type: String,
						default: true
					},
					categories: {
						type: Array,
						default: true,
					}
				},
				msg: 'Welcome to Your Page section'
			}
		},
		mounted() {
			console.log('the page section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
	.page {
		background: transparent;
	}
</style>
