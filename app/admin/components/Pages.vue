<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Pages</h2>
		<ul>
			<li>here is the list</li>
		</ul>
	</div>
</template>

<script>
	import superagent from 'superagent';
	import superagentJsonapify from 'superagent-jsonapify';
	superagentJsonapify(superagent);
	import superagentCache from 'superagent-cache';
	superagentCache(superagent);

	import { dummy } from '../../helper_constants';

	export default {
		name: 'Pages',
		data () {

			const request = superagent.get(dummy.page)
				.then((response) => {
					const body = response.body;
					console.dir(body);
				});

			return {
				msg: 'Welcome to Your Pages section',
				Pages: []
			}
		},
		mounted() {
			console.log('the pages section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
</style>

