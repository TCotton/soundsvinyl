<template>
	<div :class="$style.addPage">
		&nbsp;<h2>Add a new page</h2>
		<form
			id="addPage"
			name="addPage"
			method="post"
			@submit="onSubmit">

			<label for="addPageTitle">Record title</label>
			<input
				id="addPageTitle"
				v-model="AddPageForm.title"
				type="text"
				name="addPageTitle"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addPageSubTitle">Records label details</label>
			<input
				id="addPageSubTitle"
				v-model="AddPageForm.subTitle"
				name="addPageSubTitle"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addPageVideoLink">Link to video page</label>
			<input
				id="addPageVideoLink"
				v-model="AddPageForm.videoLink"
				name="addPageVideoLink"
				type="url"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addPageDescriptionOne">First paragraph of description</label>
			<textarea
				id="addPageDescriptionOne"
				v-model="AddPageForm.descriptionOne"
				name="addPageDescriptionOne"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="addPageDescriptionTwo">Second paragraph of description</label>
			<textarea
				id="addPageDescriptionTwo"
				v-model="AddPageForm.descriptionTwo"
				name="addPageDescriptionTwo"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="addPageDescriptionThree">Three paragraph of description</label>
			<textarea
				id="addPageDescriptionThree"
				v-model="AddPageForm.descriptionThree"
				name="addPageDescriptionThree"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="addPageCategories">Categories (comma-separated list)</label>
			<input
				id="addPageCategories"
				v-model="AddPageForm.categories"
				name="addPageCategories"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<input
				type="submit"
				name="addPageSubmit"
				value="Page submit">
		</form>
	</div>
</template>

<script>
	import { homeURI } from '../../helper_constants';

	export default {
		name: 'AddPage',
		data () {
			return {
				AddPageForm: {
					title: '',
					subTitle: '',
					videoLink: '',
					descriptionOne: '',
					descriptionTwo: '',
					descriptionThree: '',
					categories: '',
				},
				msg: 'Welcome to Add Page section'
			}
		},
		methods: {
			onSubmit (event) {
				event.preventDefault();
				this.onPost();
			},
			onPost () {

				// use if statement to check if there is a comma-separated list of words
				// this.AddPageForm.addPageCategories = this.AddPageForm.addPageCategories.split(',');

				this.$http.post(`${homeURI}/page/add`, JSON.stringify(this.AddPageForm), {
					headers: {
						'Content-Type': 'application/json'
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

	.addPage {
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

		textarea {
			grid-column: 2 / 3;
			min-height: 150px;
			padding: 10px;
			@include font-calculator($font_family_body, 14px, 0);
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
