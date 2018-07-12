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
				v-model="EditPageForm.editPageId"
				type="text"
				name="editPageId"
				disabled
				value="">

			<label for="editPageTitle">Record title</label>
			<input
				id="editPageTitle"
				v-model="EditPageForm.editPageTitle"
				type="text"
				name="editPageTitle"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editPageSubTitle">Records label details</label>
			<input
				id="editPageSubTitle"
				v-model="EditPageForm.editPageSubTitle"
				name="editPageSubTitle"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editPageVideoLink">Link to video page</label>
			<input
				id="editPageVideoLink"
				v-model="EditPageForm.editPageVideoLink"
				name="editPageVideoLink"
				type="url"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editPageDescriptionOne">First paragraph of description</label>
			<textarea
				id="editPageDescriptionOne"
				v-model="EditPageForm.editPageDescriptionOne"
				name="editPageDescriptionOne"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="editPageDescriptionTwo">Second paragraph of description</label>
			<textarea
				id="editPageDescriptionTwo"
				v-model="EditPageForm.editPageDescriptionTwo"
				name="editPageDescriptionTwo"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="editPageDescriptionThree">Three paragraph of description</label>
			<textarea
				id="editPageDescriptionThree"
				v-model="EditPageForm.editPageDescriptionThree"
				name="editPageDescriptionThree"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="editPageCategories">Categories (comma-separated list)</label>
			<input
				id="editPageCategories"
				v-model="EditPageForm.editPageCategories"
				name="editPageCategories"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="editDate">Date created (cannot edit)</label>
			<input
				id="editDate"
				v-model="EditPageForm.editDate"
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
	import { homeURI } from '../../helper_constants';

	export default {
		name: 'Page',
		data () {
			return {
				EditPageForm: {
					editPageId: null,
					editPageTitle: null,
					editPageSubTitle: null,
					editPageVideoLink: null,
					editPageDescriptionOne: null,
					editPageDescriptionTwo: null,
					editPageDescriptionThree: null,
					editPageCategories: null,
					editDate: null,
				},
				msg: 'Welcome to Your Page section'
			}
		},
		mounted() {

			this.$http.get(`${homeURI}/page/get/${this.$route.params.id}`).then((response) => {

				this.EditPageForm = {
					editPageId: response.data._id,
					editPageTitle: response.data.title,
					editPageSubTitle: response.data.subTitle,
					editPageVideoLink: response.data.videoLink,
					editPageDescriptionOne: response.data.addPageDescriptionOne,
					editPageDescriptionTwo: response.data.addPageDescriptionTwo,
					editPageDescriptionThree: response.data.addPageDescriptionThree,
					editPageCategories: response.data.categories,
					editDate: moment(response.data.date).format('h:mm:ss a, MMMM Do YYYY'),
					editUpdate: new Date().toISOString(),
					editUserId: response.data.userId,
				};

			}, (response) => {
				throw Error(response);
			});
		},
		methods: {
			onSubmit (event) {
				event.preventDefault();
				this.onPost();

				this.errors = [];
			},
			onPost() {

				const formData = new FormData();
				formData.append('id', this.EditPageForm.editPageId);
				formData.append('title', this.EditPageForm.editPageTitle);
				formData.append('subTitle', this.EditPageForm.editPageSubTitle);
				formData.append('videoLink', this.EditPageForm.editPageVideoLink);
				formData.append('categories', this.EditPageForm.editPageCategories);
				formData.append('addPageDescriptionOne', this.EditPageForm.editPageDescriptionOne);
				formData.append('addPageDescriptionTwo', this.EditPageForm.editPageDescriptionTwo);
				formData.append('addPageDescriptionThree', this.EditPageForm.editPageDescriptionThree);
				formData.append('updated', this.EditPageForm.editUpdate);

				this.$http.put(`${homeURI}/page/update`, formData, {
					headers: {
						'Content-Type': 'application/form-data'
					}
				}).then((response) => {
					return response;
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
