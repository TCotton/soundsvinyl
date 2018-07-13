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
				<td>
					<router-link :to="{ name: 'User', params: { id: user._id }}">Edit</router-link>
				</td>
				<td>Delete</td>
			</tr>

		</table>
	</div>
</template>

<script>
	import { homeURI } from '../../helper_constants';

	export default {
		name: 'Users',
		data () {
			return {
				URL: `${homeURI}/user/get`,
				msg: 'Welcome to Your Users section',
				Users: []
			}
		},
		created () {

			this.$http.get(`${homeURI}/user/get`).then((response) => {
				this.Users = response.data;
			}, (response) => {
				throw Error(response.data);
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
		list-style: none;
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
