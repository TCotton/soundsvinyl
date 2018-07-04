<template>
	<div :class="$style.addPage">
		&nbsp;&nbsp;
		<form
			id="addPage"
			name="addPage"
			method="post"
			novalidate
			@submit="onSubmit">

			<label for="addPageTitle">Record title</label>
			<input
				id="addPageTitle"
				v-model="addPageTitle"
				type="text"
				name="addPageTitle"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addPageSubTitle">Records label details</label>
			<input
				id="addPageSubTitle"
				v-model="addPageSubTitle"
				type="text"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addPageVideoLink">Link to video page</label>
			<input
				id="addPageVideoLink"
				v-model="addPageVideoLink"
				type="url"
				required
				autocorrect="off"
				autocapitalize="off"
				value="">

			<label for="addPageDescriptionOne">First paragraph of description</label>
			<textarea
				id="addPageDescriptionOne"
				v-model="addPageDescriptionOne"
				name="addPageDescriptionOne"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="addPageDescriptionTwo">Second paragraph of description</label>
			<textarea
				id="addPageDescriptionTwo"
				v-model="addPageDescriptionTwo"
				name="addPageDescriptionTwo"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="addPageDescriptionThree">Three paragraph of description</label>
			<textarea
				id="addPageDescriptionThree"
				v-model="addPageDescriptionThree"
				name="addPageDescriptionThree"
				required
				cols="10"
				rows="10"
				maxlength="280"
			/>

			<label for="addPageCategories">Categories (comma-separated list)</label>
			<input
				id="addPageCategories"
				v-model="addPageCategories"
				type="url"
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
	export default {
		name: 'AddPage',
		data () {
			return {
				errors: [],
				addPageTitle: null,
				addPageSubTitle: null,
				addPageVideoLink: null,
				addPageDescriptionOne: null,
				addPageDescriptionTwo: null,
				addPageDescriptionThree: null,
				addPageCategories: null,
				msg: 'Welcome to Add Page section'
			}
		},
		methods: {
			onSubmit: function (event) {
				event.preventDefault();

				this.errors = [];
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
