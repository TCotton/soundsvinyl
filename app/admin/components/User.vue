<template>
	<div :class="$style.user">
		<h1>{{ msg }}</h1>
		<h2>User</h2>
		<p>This is a user</p>
	</div>
</template>

<script>
	export default {
		name: 'User',
		data () {
			return {
				props: {
					id: {
						type: Number,
						required: true,
					},
					email: {
						type: String,
						required: true,
					},
					password: {
						type: String,
						required: true,
					}
				},
				msg: 'Welcome to Your User section'
			}
		},
		mounted() {
			console.log('the pages section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.user {
		background: transparent;
	}
</style>
