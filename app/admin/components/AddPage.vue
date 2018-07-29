<template>
	<div :class="$style.addPage">
		&nbsp;<h2>Add a new page</h2>

		<p
			:class="$style.error"
			v-show="errorMsg">
			{{ errorMsg }}
		</p>

		<form
			id="addPage"
			:action="actionURL"
			name="addPage"
			method="post"
			@submit.prevent="validateBeforeSubmit">

			<label for="addPageTitle">Record title</label>
			<input
				v-validate="{ required: true }"
				id="addPageTitle"
				v-model="AddPageForm.title"
				type="text"
				name="addPageTitle"
				autocorrect="off"
				autocapitalize="off"
				value="">

			<span
				v-show="errors.has('addPageTitle')"
				:class="$style.error">{{ errors.first('addPageTitle') }}</span>

			<label for="addPageSubTitle">Records release details (label, year)</label>
			<input
				v-validate="{ required: true }"
				id="addPageSubTitle"
				v-model="AddPageForm.subTitle"
				name="addPageSubTitle"
				type="text"
				autocorrect="off"
				autocapitalize="off"
				value="">

			<span
				v-show="errors.has('addPageSubTitle')"
				:class="$style.error">{{ errors.first('addPageSubTitle') }}</span>

			<label for="addPageVideoLink">Link to video page</label>
			<input
				v-validate="{ required: true, url: true, regex: /^https/ }"
				id="addPageVideoLink"
				v-model="AddPageForm.videoLink"
				name="addPageVideoLink"
				type="url"
				autocorrect="off"
				autocapitalize="off"
				value="">

			<span
				v-show="errors.has('addPageVideoLink')"
				:class="$style.error">{{ errors.first('addPageVideoLink') }}</span>

			<label for="addPageDescriptionOne">First paragraph of description</label>
			<textarea
				v-validate="{ required: true }"
				id="addPageDescriptionOne"
				v-model="AddPageForm.descriptionOne"
				name="addPageDescriptionOne"
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<span
				v-show="errors.has('addPageDescriptionOne')"
				:class="$style.error">{{ errors.first('addPageDescriptionOne') }}</span>

			<label for="addPageDescriptionTwo">Second paragraph of description</label>
			<textarea
				id="addPageDescriptionTwo"
				v-model="AddPageForm.descriptionTwo"
				name="addPageDescriptionTwo"
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="addPageDescriptionThree">Three paragraph of description</label>
			<textarea
				id="addPageDescriptionThree"
				v-model="AddPageForm.descriptionThree"
				name="addPageDescriptionThree"
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
				autocorrect="off"
				autocapitalize="off"
				value="">

			<span
				v-show="errors.has('addPageCategories')"
				:class="$style.error">{{ errors.first('addPageCategories') }}</span>

			<input
				type="submit"
				name="addPageSubmit"
				value="Page submit">
		</form>
	</div>
</template>

<script>
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
				msg: 'Welcome to Add Page section',
				actionURL: `page/add`,
				errorMsg: null,
			}
		},
		methods: {

			validateBeforeSubmit () {
				this.$validator.validateAll().then((result) => {
					this.errorMsg = null;

					if (result) {

						this.$http.post(this.actionURL, JSON.stringify(this.AddPageForm), {
							headers: {
								'Content-Type': 'application/json'
							}
						}).then((response) => {

							if (response.data) {
								this.$router.push('Pages');
							}

						}, (response) => {
							this.errorMsg = response.data;
						});
					}

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
			line-height: 2;
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
