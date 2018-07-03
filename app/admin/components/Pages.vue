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
	import request from 'superagent';
	import { dummy } from '../../helper_constants';

	export default {
		name: 'Pages',
		data () {
			return {

				props: {
					// Basic type check (`null` matches any type)
					id: {
						type: Number,
						required: true,
					},
					// Multiple possible types
					title: {
						type: String,
						required: true,
					},
					// Required string
					subTitle: {
						type: String,
						required: true
					},
					// Number with a default value
					videoLink: {
						type: Number,
						default: true // there must a fallback url here
					},
					// Object with a default value
					description: {
						type: String,
						// Object or array defaults must be returned from
						// a factory function
						default: true
					},
					// Custom validator function
					categories: {
						type: Array,
						default: true,
					}
				},

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

