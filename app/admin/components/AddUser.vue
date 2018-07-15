<template>
	<div :class="$style.addUser">
		<h2>Add a new user</h2>

		<form
			id="addUser"
			:action="actionURL"
			name="addUser"
			method="post"
			@submit.prevent="validateBeforeSubmit">

			<label for="addUserEmail">User email which will be their username</label>
			<input
				v-validate="{ required: true, email: true }"
				id="addUserEmail"
				v-model="addUser.email"
				type="email"
				name="email"
				maxlength="64"
				autocorrect="off"
				autocapitalize="off"
				value="">

			<span
				v-show="errors.has('addUserEmail')"
				:class="$style.error">{{ errors.first('addUserEmail') }}</span>

			<label for="addUserPasswordOne">Password</label>
			<input
				v-validate="{ required: true, confirmed: 'confirmation' }"
				id="addUserPasswordOne"
				v-model="addUser.password"
				type="password"
				name="password"
				maxlength="64"
				autocorrect="off"
				autocapitalize="off"
				value="">

			<span
				v-show="errors.has('addUserPasswordOne')"
				:class="$style.error">{{ errors.first('addUserPasswordOne') }}</span>

			<label for="addUserPasswordTwo">Same password again (must match)</label>
			<input
				v-validate="'required'"
				id="addUserPasswordTwo"
				ref="confirmation"
				v-model="addUser.passwordTwo"
				type="password"
				name="addUserPasswordTwo"
				maxlength="64"
				autocorrect="off"
				autocapitalize="off"
				value="">

			<input
				type="submit"
				name="addUserSubmit"
				value="Submit User">
		</form>
	</div>
</template>

<script>
	// import sortBy from 'lodash-es/sortBy';
	import { homeURI } from '../../helper_constants';

	export default {
		name: 'AddUser',
		data () {
			return {
				addUser: {
					email: '',
					password: '',
					passwordTwo: '',
				},
				msg: 'Welcome to Add User section',
				actionURL: `${homeURI}/user/add`,
			}
		},
		methods: {

			validateBeforeSubmit () {
				this.$validator.validateAll().then((result) => {

					if (result) {
						this.$http.post(this.actionURL,  JSON.stringify(this.addUser), {
							headers: {
								'Content-Type': 'application/json'
							}
						}).then(() => {
							this.$router.push('Users');
						}, (response) => {
							throw Error(response.data);
						});

					}

				});
			}
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.addUser {
		form {
			display: grid;
			grid-template-columns: 400px 1fr;
			grid-gap: 16px;
		}
		label {
			grid-column: 1 / 2;
			@include font-calculator($font_family_body, 14px, 0);
		}

		input {
			grid-column: 2 / 3;
			@include font-calculator($font_family_body, 14px, 0);
			&:not([type=submit]) {
				padding: 10px;
			}
		}

		input[type=submit] {
			width: 200px;
			background: none;
			&:hover {
				background: $formSubmitHover;
			}
		}

		.error {
			@include font-calculator($font_family_body, 14px);
			color: $error;
		}
	}
</style>
