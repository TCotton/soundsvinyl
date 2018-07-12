<template>
	<div :class="$style.addUser">
		<h2>Add a new user</h2>
		<form
			id="addUser"
			name="addUser"
			method="post"
			novalidate
			@submit="onSubmit">

			<label for="addUserEmail">User email which will be their username</label>
			<input
				id="addUserEmail"
				v-model="addUserEmail"
				type="email"
				name="addUserEmail"
				maxlength="64"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addUserPasswordOne">Password</label>
			<input
				id="addUserPasswordOne"
				v-model="addUserPasswordOne"
				type="password"
				maxlength="64"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addUserPasswordTwo">Same password again (must match)</label>
			<input
				id="addUserPasswordTwo"
				v-model="addUserPasswordTwo"
				type="password"
				maxlength="64"
				required
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
	export default {
		name: 'AddUser',
		data () {
			return {
				errors: [],
				addUserEmail: null,
				addUserPasswordOne: null,
				addUserPasswordTwo: null,
				msg: 'Welcome to Add User section'
			}
		},
		methods: {
			onSubmit (event) {
				event.preventDefault();
				this.validatePassword();
			},
			validatePassword () {

				const addUserPasswordOne = document.getElementById('addUserPasswordOne');
				const addUserPasswordTwo = document.getElementById('addUserPasswordTwo');

				if (addUserPasswordOne.value !== addUserPasswordTwo.value) {
					addUserPasswordTwo.setCustomValidity('Passwords Don\'t Match');
				} else {
					addUserPasswordTwo.setCustomValidity('');
				}
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
	}
</style>
