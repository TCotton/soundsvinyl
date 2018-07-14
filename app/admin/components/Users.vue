<template>
	<div :class="$style.users">
		<h2>{{ msg }}</h2>

		<table>
			<caption>Users list</caption>

			<tr>
				<th scope="col">Email</th>
				<th scope="col">Id</th>
				<th scope="col">Edit</th>
				<th scope="col">Delete</th>
			</tr>

			<tr
				v-for="user in Users"
				:key="user._id">
				<th scope="row">{{ user.email }}</th>
				<td>{{ user._id }}</td>
				<td>
					<router-link :to="{ name: 'User', params: { id: user._id }}">Edit</router-link>
				</td>
				<td>
					<div
						@click="showModal = true, deleteId = user._id"
						:class="$style.delete">Delete
					</div>
				</td>
			</tr>

		</table>

		<modal
			v-if="showModal"
			@close="deletePage">
			<h3 slot="header">Are you sure you want to delete this user?</h3>
		</modal>

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
				Users: [],
				showModal: false,
				deleteId: '',
			}
		},
		created () {

			this.$http.get(`${homeURI}/user/get`).then((response) => {
				this.Users = response.data;
			}, (response) => {
				throw Error(response.data);
			});

		},
		methods: {
			deletePage (...args) {
				this.showModal = false;

				if (arguments[0]) {
					this.$http.delete(`${homeURI}/user/delete/${this.deleteId}`).then(res => {

						this.Users = res.body;

					}, response => {
						new Error(response);
					});
				}
			}
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

	.delete {
		cursor: pointer;
	}

</style>
