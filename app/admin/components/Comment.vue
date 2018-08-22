<template>
	<div :class="$style.comment">

		<h2>{{ msg }}</h2>

		<p
			:class="$style.error"
			v-show="errorMsg">
			{{ errorMsg }}
		</p>

		<h3>Edit comment</h3>

		<form
			id="editComment"
			:action="actionURL"
			name="editComment"
			method="post"
			@submit.prevent="validateBeforeSubmit">

			<label for="editCommentId">Comment ID (cannot edit)</label>
			<input
				id="editCommentId"
				v-model="EditCommentForm._id"
				type="text"
				name="editCommentId"
				disabled
				value="">

			<label for="editCommentArticleId">Article ID (cannot edit)</label>
			<input
				id="editCommentArticleId"
				v-model="EditCommentForm.articleId"
				type="text"
				name="editCommentArticleId"
				disabled
				value="">

			<label for="editCommentArticleName">Article name (cannot edit)</label>
			<input
				id="editCommentArticleName"
				v-model="EditCommentForm.articleName"
				type="text"
				name="editCommentArticleName"
				disabled
				value="">

			<label for="editCommentAuthorId">Comment author id (cannot edit)</label>
			<input
				id="editCommentAuthorId"
				v-model="EditCommentForm.articleId"
				type="text"
				name="editCommentAuthorId"
				disabled
				value="">

			<label for="editCommentAuthorName">Comment author name (cannot edit)</label>
			<input
				id="editCommentAuthorName"
				v-model="EditCommentForm.articleName"
				type="text"
				name="editCommentAuthorName"
				disabled
				value="">

			<label for="editCommentDate">Comment submitted date (cannot edit)</label>
			<input
				id="editCommentDate"
				v-model="EditCommentForm.date"
				type="text"
				name="editCommentDate"
				disabled
				value="">

			<label for="editCommentMessage">Comment published</label>

			<textarea
				id="editCommentMessage"
				v-model="EditCommentForm.content"
				name="editCommentMessage"
				value=""
				rows="10"
				columns="10"
			/>

			<label for="editCommentPublished">Comment published</label>

			<input
				id="editCommentPublished"
				v-model="EditCommentForm.published"
				type="checkbox"
				name="editCommentPublished"
				value=""
			>

			<input
				type="submit"
				name="editCommentSubmit"
				value="Comment submit">

		</form>

	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		name: 'Comment',
		data () {
			return {
				EditCommentForm: {
					_id: '',
					content: '',
					articleId: '',
					articleName: '',
					userId: '',
					userName: '',
					date: '',
					published: Boolean,
				},
				msg: 'Welcome the individual comment section',
				errorMsg: null,
				actionURL: `comment/update`,
				originalCreationDate: ''
			}
		},

		mounted () {

			this.$http.get(`comment/get/${this.$route.params.id}`).then((commentResponse) => {

				this.$http.get(`page/get/${commentResponse.data.articleId}`).then((response) => {

					this.EditCommentForm = {
						_id: commentResponse.body._id,
						content: commentResponse.body.content,
						articleId: commentResponse.body.articleId,
						articleName: response.body.title,
						userId: commentResponse.body.userId,
						userName: commentResponse.body.userName,
						date: moment(response.body.date).format('h:mm:ss a, MMMM Do YYYY'),
						published: commentResponse.body.published,
					}

					this.originalCreationDate = response.body.date;

				}, (response) => {
					throw Error(response.body);
				});

			}, (response) => {
				throw Error(response.body);
			});

		},

		methods: {

			validateBeforeSubmit () {
				this.$validator.validateAll().then((result) => {
					this.errorMsg = null;

					if (result) {
						// revert date back to UTC format
						this.EditCommentForm.date = this.originalCreationDate;

						console.dir(this.EditCommentForm);

						this.$http.put(this.actionURL, JSON.stringify(this.EditCommentForm), {
							headers: {
								'Content-Type': 'application/json'
							}
						}).then(() => {
							this.$router.push({path: 'Comments'});
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

	.comment {

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
		.error {
			@include font-calculator($font_family_body, 14px);
			color: $error;
		}
		.thumbnail {
			margin: 0 0 20px 0;
		}
	}
</style>
