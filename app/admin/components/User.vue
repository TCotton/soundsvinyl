<template>
	<div :class="$style.user">
		<h2>{{ msg }}</h2>

		<p
			:class="$style.success"
			v-show="success">
			{{ successMsg }}
		</p>

		<form
			id="editUser"
			:action="actionURL"
			name="editUser"
			method="post"
			@submit.prevent="validateBeforeSubmit"
		>
			<label for="editUserEmail">Email address</label>
			<input
				v-validate="{ required: true, email: true }"
				id="editUserEmail"
				v-model="editUser.email"
				type="email"
				name="editUserEmail"
				maxlength="254"
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('editUserEmail')"
				:class="$style.error"
			>
				{{ errors.first('editUserEmail') }}
			</span>

			<label for="editUsername">Username (automatically generated)</label>
			<input
				v-validate="{ required: true }"
				id="editUsername"
				v-model="editUser.username"
				type="email"
				name="editUserEmail"
				disabled
				value=""
			/>

			<span
				v-show="errors.has('editUsername')"
				:class="$style.error"
			>{{ errors.first('editUsername') }}</span>

			<label for="editUserPasswordOne">Password</label>
			<input
				v-validate="{ required: true, confirmed: 'confirmation' }"
				id="editUserPasswordOne"
				v-model="editUser.password"
				type="password"
				name="editUserPasswordOne"
				maxlength="64"
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('editUserPasswordTwo')"
				:class="$style.error">
				{{ errors.first('editUserPasswordTwo') }}
			</span>

			<label for="editUserPasswordTwo">Same password again (must match)</label>
			<input
				v-validate="'required'"
				id="editUserPasswordTwo"
				ref="confirmation"
				v-model="editUser.passwordTwo"
				type="password"
				name="editUserPasswordTwo"
				maxlength="64"
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<label for="editDate">Date created (cannot edit)</label>
			<input
				id="editDate"
				v-model="editUser.date"
				type="text"
				name="editDate"
				disabled
				value=""
			/>

			<label for="editUpdated">Date updated (cannot edit)</label>
			<input
				id="editUpdated"
				v-model="editUser.updated"
				type="text"
				name="editUpdated"
				disabled
				value=""
			/>

			<input
				type="submit"
				name="editUserSubmit"
				value="Edit User"
			/>
		</form>
	</div>
</template>

<script>
import moment from 'moment'
import { createUsername } from '../../helper_functions'

export default {
	name: 'User',
	data () {
		return {
			actionURL: `user/get/${this.$route.params.id}`,
			editUser: {
				email: '',
				password: '',
				passwordTwo: '',
				date: '',
				updated: ''
			},
			msg: 'Welcome to the individual user section',
			successMsg: 'You have successfully updated the user details',
			success: false,
			originalCreationDate: ''
		}
	},
	mounted () {
		this.$http.get(this.actionURL).then(
			response => {
				// this.originalCreationDate is now read only
				Object.defineProperty(this, 'originalCreationDate', {
					value: response.data.date,
					writable: false,
					enumerable: false,
					configurable: false
				})

				let username = ''

				if (response.data.email) {
					username = response.data.username
						? response.data.username
						: createUsername(response.data.email)
				}

				this.editUser = {
					_id: response.data._id,
					email: response.data.email,
					username,
					date: moment(response.data.date).format('h:mm:ss a, MMMM Do YYYY'),
					updated: response.data.updated
						? moment(response.data.updated).format('h:mm:ss a, MMMM Do YYYY')
						: ''
				}
			},
			response => {
				throw Error(response.body)
			}
		)
	},
	methods: {
		validateBeforeSubmit () {
			this.$validator.validateAll().then(result => {
				if (result) {
					// revert date back to UTC format
					this.editUser.date = this.originalCreationDate

					this.$http
						.put(`user/update`, JSON.stringify(this.editUser), {
							headers: {
								'Content-Type': 'application/json'
							}
						})
						.then(
							() => {
								this.$router.push({ path: 'Users' })
							},
							response => {
								throw Error(response.body)
							}
						)
				}
			})
		}
	}
}
</script>

<style lang="scss" module>
@import '../../assets/sass/tools';

.user {
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
		&:not([type='submit']) {
			padding: 10px;
		}
		&:disabled {
			opacity: 0.5;
		}
	}

	textarea {
		grid-column: 2 / 3;
		min-height: 150px;
		padding: 10px;
		@include font-calculator($font_family_body, 14px, 0);
	}

	input[type='submit'] {
		width: 200px;
		background: none;
		margin: 25px 0 0 0;
		&:hover {
			background: $formSubmitHover;
		}
	}

	.error {
		@include font-calculator($font_family_body, 14px);
		color: $error;
	}

	.success {
		color: $success;
	}
}
</style>
