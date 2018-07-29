<template>
	<div :class="$style.page">
		<h2>{{ msg }}</h2>
		<form
			id="editPage"
			name="editPage"
			method="post"
			@submit="onSubmit">

			<label for="editPageId">PageId (cannot edit)</label>
			<input
				id="editPageId"
				v-model="EditPageForm._id"
				type="text"
				name="editPageId"
				disabled
				value="">

			<label for="editPageTitle">Record title</label>
			<input
				id="editPageTitle"
				v-model="EditPageForm.title"
				type="text"
				name="editPageTitle"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editPageSubTitle">Records label details</label>
			<input
				id="editPageSubTitle"
				v-model="EditPageForm.subTitle"
				name="editPageSubTitle"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editPageVideoLink">Link to video page</label>
			<input
				id="editPageVideoLink"
				v-model="EditPageForm.videoLink"
				name="editPageVideoLink"
				type="url"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editPageDescriptionOne">First paragraph of description</label>
			<textarea
				id="editPageDescriptionOne"
				v-model="EditPageForm.descriptionOne"
				name="editPageDescriptionOne"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="editPageDescriptionTwo">Second paragraph of description</label>
			<textarea
				id="editPageDescriptionTwo"
				v-model="EditPageForm.descriptionTwo"
				name="editPageDescriptionTwo"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="editPageDescriptionThree">Three paragraph of description</label>
			<textarea
				id="editPageDescriptionThree"
				v-model="EditPageForm.descriptionThree"
				name="editPageDescriptionThree"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="editPageCategories">Categories (comma-separated list)</label>
			<input
				id="editPageCategories"
				v-model="EditPageForm.categories"
				name="editPageCategories"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editDate">Date created (cannot edit)</label>
			<input
				id="editDate"
				v-model="EditPageForm.date"
				type="text"
				name="editDate"
				disabled
				value="">

			<label for="editUserId">Created by (cannot edit)</label>
			<input
				id="editUserId"
				v-model="EditPageForm.editUserId"
				type="text"
				name="editUserId"
				disabled
				value="">

			<input
				type="submit"
				name="addPageSubmit"
				value="Page submit">
		</form>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		name: 'Page',
		data () {
			return {
				EditPageForm: {
					_id: '',
					title: '',
					subTitle: '',
					videoLink: '',
					descriptionOne: '',
					descriptionTwo: '',
					descriptionThree: '',
					categories: '',
					date: '',
					editUserId: '',
				},
				originalCreationDate: '',
				msg: 'Welcome the individual page section'
			}
		},
		mounted() {

			this.$http.get(`page/get/${this.$route.params.id}`).then((response) => {

				console.dir(response);

				this.EditPageForm = {
					_id: response.data._id,
					title: response.data.title,
					subTitle: response.data.subTitle,
					videoLink: response.data.videoLink,
					descriptionOne: response.data.descriptionOne,
					descriptionTwo: response.data.descriptionTwo,
					descriptionThree: response.data.descriptionThree,
					categories: response.data.categories,
					date: moment(response.data.date).format('h:mm:ss a, MMMM Do YYYY'),
					updated: new Date().toISOString(),
					editUserId: response.data.userId,
				};

				this.originalCreationDate = response.data.date;
			}, (response) => {
				throw Error(response.body);
			});
		},
		methods: {
			onSubmit (event) {
				event.preventDefault();
				this.onPost();

				this.errors = [];
			},
			onPost() {
				// revert date back to UTC format
				this.EditPageForm.date = this.originalCreationDate;

				this.$http.put(`page/update`, JSON.stringify(this.EditPageForm), {
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(() => {
					this.$router.push('Page');
				}, (response) => {
					throw Error(response.data);
				});
			}
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.page {
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
			&:disabled {
				opacity: 0.5
			}
		}

		textarea {
			grid-column: 2 / 3;
			min-height: 150px;
			padding: 10px;
			@include font-calculator($font_family_body, 14px, 0);
			line-height: 2;
		}

		input[type=submit] {
			width: 200px;
			background: none;
			margin: 25px 0 0 0;
			&:hover {
				background: $formSubmitHover;
			}
		}
	}
</style>
