<template>
	<div :class="$style.pages">
		<h1>{{ msg }}</h1>
		<h2>Pages</h2>
		<ul>
			<li>here is the list</li>
		</ul>
	</div>
</template>

<script>
	import request from 'superagent';
	import { dummy } from '../../helper_constants';

	export default {
		name: 'Pages',
		data () {
			return {
				msg: 'Welcome to Your Pages section',
				Pages: []
			}
		},
		created () {
			request
				.get(dummy.users)
				.end((err, res) => {
					if (err) {
						new Error(err);
					}
					this.Pages = res.body;
				});
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
	.pages {
		background: transparent;
	}
</style>

