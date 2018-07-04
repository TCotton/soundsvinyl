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

			<label for="addPageVideoLink">Link to video page</label>
			<textarea
				id="addPageDescriptionOne"
				name="addPageDescriptionOne"
			/>

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
		mounted () {
			console.log('the add page section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.addPage {
		background: transparent;
	}
</style>
