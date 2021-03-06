<template>
	<div :class="$style.page">
		<h2>{{ msg }}</h2>

		<p
			:class="$style.error"
			v-show="errorMsg"
		>
			{{ errorMsg }}
		</p>

		<h3>Thumbnail</h3>

		<thumbnail
			:thumbnail-url="thumbnail"
			:class="$style.thumbnail"
		/>

		<h4>Edit page</h4>

		<form
			id="editPage"
			:action="actionURL"
			name="editPage"
			method="post"
			@submit.prevent="validateBeforeSubmit"
		>
			<label for="editPageId">PageId (cannot edit)</label>
			<input
				id="editPageId"
				v-model="EditPageForm._id"
				type="text"
				name="editPageId"
				disabled
				value=""
			/>

			<label for="editPageTitle">Record title</label>
			<input
				v-validate="{ required: true }"
				id="editPageTitle"
				v-model="EditPageForm.title"
				type="text"
				name="editPageTitle"
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('editPageTitle')"
				:class="$style.error"
			>
				{{ errors.first('editPageTitle') }}
			</span>

			<label
				for="editPageSubTitle"
			>
				Records release details (label, year)
			</label>
			<input
				v-validate="{ required: true }"
				id="editPageSubTitle"
				v-model="EditPageForm.subTitle"
				name="editPageSubTitle"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('editPageSubTitle')"
				:class="$style.error"
			>
				{{ errors.first('editPageSubTitle') }}
			</span>

			<label for="slug">SEO friendly page title slug - human-friendly</label>
			<input
				v-validate="{ required: true }"
				id="slug"
				v-model="EditPageForm.slug"
				name="slug"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('slug')"
				:class="$style.error"
			>
				{{ errors.first('slug') }}
			</span>

			<label for="shortSlug">SEO friendly page title slug - machine-friendly</label>
			<input
				v-validate="{ required: true }"
				id="shortSlug"
				v-model="EditPageForm.shortSlug"
				name="shortSlug"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('shortSlug')"
				:class="$style.error"
			>{{ errors.first('shortSlug') }}</span>

			<label for="editPageVideoLink">Link to video page</label>
			<input
				v-validate="{ required: true, url: true, regex: /^https/ }"
				id="editPageVideoLink"
				v-model="EditPageForm.videoLink"
				name="editPageVideoLink"
				type="url"
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('editPageVideoLink')"
				:class="$style.error"
			>{{ errors.first('editPageVideoLink') }}</span>

			<label for="editPageDescriptionOne">First paragraph of description</label>
			<textarea
				v-validate="{ required: true }"
				id="editPageDescriptionOne"
				v-model="EditPageForm.descriptionOne"
				name="editPageDescriptionOne"
				required
				cols="10"
				rows="10"
			/>

			<label for="editPageDescriptionTwo">Second paragraph of description</label>
			<textarea
				id="editPageDescriptionTwo"
				v-model="EditPageForm.descriptionTwo"
				name="editPageDescriptionTwo"
				cols="10"
				rows="10"
			/>

			<span
				v-show="errors.has('editPageDescriptionTwo')"
				:class="$style.error"
				>{{ errors.first('editPageDescriptionTwo') }}</span>

			<label for="editPageDescriptionThree">Three paragraph of description</label>
			<textarea
				id="editPageDescriptionThree"
				v-model="EditPageForm.descriptionThree"
				name="editPageDescriptionThree"
				cols="10"
				rows="10"
			/>

			<label for="editPageDescriptionFour">Fourth paragraph of description</label>
			<textarea
				id="editPageDescriptionFour"
				v-model="EditPageForm.descriptionFour"
				name="editPageDescriptionFour"
				cols="10"
				rows="10"
			/>

			<label for="editPageDescriptionFive">Fifth paragraph of description</label>
			<textarea
				id="editPageDescriptionFive"
				v-model="EditPageForm.descriptionFive"
				name="editPageDescriptionFive"
				cols="10"
				rows="10"
			/>

			<label for="editPageCategories">Categories (comma-separated list)</label>
			<input
				v-validate="{ required: true }"
				id="editPageCategories"
				v-model="EditPageForm.categories"
				name="editPageCategories"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value=""
			/>

			<span
				v-show="errors.has('editPageCategories')"
				:class="$style.error"
			>{{ errors.first('editPageCategories') }}</span>

			<label for="editDate">Date created (cannot edit)</label>
			<input
				id="editDate"
				v-model="EditPageForm.date"
				type="text"
				name="editDate"
				disabled
				value=""
			/>

			<label for="editUpdate">Date last updated (cannot edit)</label>
			<input
				id="editUpdate"
				v-model="EditPageForm.updated"
				type="text"
				name="editUpdate"
				disabled
				value=""
			/>

			<label for="editUserId">Created by (cannot edit)</label>
			<input
				id="editUserId"
				v-model="EditPageForm.editUserId"
				type="text"
				name="editUserId"
				disabled
				value=""
			/>

			<input
				type="submit"
				name="addPageSubmit"
				value="Page submit"
			/>
		</form>
	</div>
</template>

<script>
import moment from 'moment-mini';

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
				descriptionFour: '',
				descriptionFive: '',
				categories: '',
				date: '',
				editUserId: '',
				slug: '',
				shortSlug: '',
				updated: ''
			},
			actionURL: `page/update`,
			originalCreationDate: '',
			msg: 'Welcome the individual page section',
			errorMsg: null,
			thumbnail: ''
		}
	},
	mounted () {
		this.$http.get(`page/get/${this.$route.params.id}`).then(
			response => {
				const catReduce = response.data.categories.reduce(
					(accumulator, currentValue) => {
						return accumulator.concat(currentValue.name)
					},
					[]
				)

				this.EditPageForm = {
					_id: response.data._id,
					title: response.data.title,
					subTitle: response.data.subTitle,
					slug: response.data.slug,
					shortSlug: response.data.shortSlug,
					videoLink: response.data.videoLink,
					descriptionOne: response.data.descriptionOne,
					descriptionTwo: response.data.descriptionTwo,
					descriptionThree: response.data.descriptionThree,
					descriptionFour: response.data.descriptionFour,
					descriptionFive: response.data.descriptionFive,
					categories: catReduce.join() || '',
					date: moment(response.data.date).format('h:mm:ss a, MMMM Do YYYY'),
					updated: response.data.updated
						? moment(response.data.updated).format('h:mm:ss a, MMMM Do YYYY')
						: null,
					editUserId: response.data.userId
				}

				this.originalCreationDate = response.data.date
				this.thumbnail =
					window.location.protocol +
					'//' +
					window.location.hostname +
					(window.location.port.length === 0 ? '/' : ':8443/') +
					`thumbnails/thumbnail-${this.EditPageForm._id}.png`
			},
			response => {
				throw Error(response.body)
			}
		)
	},
	methods: {
		validateBeforeSubmit () {
			this.$validator.validateAll().then(result => {
				this.errorMsg = null

				if (result) {
					// revert date back to UTC format
					this.EditPageForm.date = this.originalCreationDate

					this.$http
						.put(this.actionURL, JSON.stringify(this.EditPageForm), {
							headers: {
								'Content-Type': 'application/json'
							}
						})
						.then(
							() => {
								this.$router.push({ path: 'Page' })
							},
							response => {
								throw Error(response.data)
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

.page {
	h3 {
		@include font-calculator($font_family_header, 20px, 0);
	}

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
		line-height: 2;
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
	.thumbnail {
		margin: 0 0 20px 0;
	}
}
</style>
