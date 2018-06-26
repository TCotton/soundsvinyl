<template>
	<div class="add-page">
		<form
			id="addUser"
			name="addUser"
			method="post"
			novalidate
			@submit="onSubmit"
		>
			<label for="addUserEmail">User email which will be their username</label>
			<input
				v-model="addUserEmail"
				type="email"
				id="addUserEmail"
				name="addUserEmail"
				maxlength="64"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addUserPasswordOne">Password</label>
			<input
				v-model="addUserPasswordOne"
				id="addUserPasswordOne"
				type="password"
				maxlength="64"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addUserPasswordTwo">Same password again (must match)</label>
			<input
				v-model="addUserPasswordTwo"
				id="addUserPasswordTwo"
				type="password"
				maxlength="64"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<input
				type="submit"
				name="addUserSubmit"
				value="Submit User"
			>
		</form>
	</div>
</template>

<script>
	/* eslint eqeqeq: "off", curly: "error" */
	export default {
		name: 'AddUser',
		data () {
			return {
				errors: [],
				addUserEmail: null,
				addUserPasswordOne: null,
				addUserPasswordTwo: null
			}
		},
		methods: {
			onSubmit: function (event) {
				event.preventDefault();

				this.errors = [];

				if (!this.name) {
					this.errors.push("Name required.");
				}
				if (!this.email) {
					this.errors.push('Email required.');
				} else if (!this.validEmail(this.email)) {
					this.errors.push('Valid email required.');
				}

				if (!this.errors.length) {
					return true;
				}
				console.dir(event);
				console.dir(this);
			},
			validEmail: function (email) {
				const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		}
	}
</script>

<style lang="scss" data-module>
	@import '../../assets/sass/tools';

</style>
