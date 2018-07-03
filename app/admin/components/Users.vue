<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Users</h2>
		<ul>
			<li>Here is the list</li>
		</ul>
	</div>
</template>

<script>
	import request from 'superagent';
	import { dummy } from '../../helper_constants';

	export default {
		name: 'Users',
		data () {
			return {
				props: {
					// Basic type check (`null` matches any type)
					id: {
						type: Number,
						required: true,
					},
					// Multiple possible types
					email: {
						type: String,
						required: true,
					},
					password: {
						type: String,
						required: true,
					}

				},

				msg: 'Welcome to Your Users section',
				Users: []
			}
		},
		created () {
			request
				.get(dummy.users)
				.end((err, res) => {
					if(err) {
						throw new Error();
					}
					console.dir(res);
				});
		},

		mounted () {
			console.log('the pages section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
	h1, h2 {
		font-weight: normal;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
