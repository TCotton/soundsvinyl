<template>
	<div :class="$style.users">
		<h1>{{ msg }}</h1>

		<table>
			<caption>Users list</caption>

			<tr>
				<th scope="col">Email</th>
				<th scope="col">Edit</th>
				<th scope="col">Delete</th>
			</tr>

			<tr
				v-for="user in Users"
				:key="user.id">
				<th scope="row">{{ user.email }}</th>
				<td>Edit</td>
				<td>Delete</td>
			</tr>

		</table>
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

				msg: 'Welcome to Your Users section',
				Users: []
			}
		},
		created () {
			request
				.get(dummy.users)
				.end((err, res) => {
					if (err) {
						throw new Error();
					}
					this.Users = res.body;
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

	table {
		text-align: left;
	}

	caption {
		@include font-calculator($font_family_body, 16px, 0.5);
		text-align: left;
	}

	th {
		@include font-calculator($font_family_body, 14px, 0.25);
		font-weight: 500;
		padding: 0 10px 0 0;
	}

	td {
		@include font-calculator($font_family_body, 14px, 0.25);
		padding: 0 10px 0 0;
	}

</style>
