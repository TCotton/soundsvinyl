<template>
	<div :class="$style.users">
		<h2>{{ msg }}</h2>

		<table>
			<caption>Users list</caption>

			<tr>
				<th scope="col">Email</th>
				<th scope="col">Edit</th>
				<th scope="col">Delete</th>
			</tr>

			<tr
				v-for="user in Users"
				:key="user._id">
				<th scope="row">{{ user.email }}</th>
				<td><router-link :to="{ name: 'User', params: { id: user._id }}">Edit</router-link></td>
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
				msg: 'Welcome to Your Users section',
				Users: []
			}
		},
		created () {
			request
				.get(dummy.users)
				.end((err, res) => {
					if (err) {
						new Error(err);
					}
					this.Users = res.body;
				});
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
