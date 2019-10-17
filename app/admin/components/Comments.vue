<template>
	<div :class="$style.comments">
		<h2>{{ msg }}</h2>

		<p v-show="noContent">There are no comments in database</p>

		<paginate :list="Comments" :per="10" name="Comments">
			<table v-show="!noContent">
				<caption>
					Comments list
				</caption>

				<tr>
					<th scope="col">Article ID</th>
					<th scope="col">User name</th>
					<th scope="col">Comment</th>
					<th scope="col">Date</th>
					<th scope="col">Published</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>

				<tr v-for="comment in paginated('Comments')" :key="comment._id">
					<th scope="row">{{ comment.articleId }}</th>
					<td>{{ comment.userName }}</td>
					<td>{{ comment.content }}</td>
					<td>{{ comment.date }}</td>
					<td>{{ comment.published }}</td>

					<td>
						<router-link :to="{ name: 'Comment', params: { id: comment._id } }"
							>Edit</router-link
						>
					</td>
					<td>
						<div
							@click=";(showModal = true), (deleteId = comment._id)"
							:class="$style.delete"
						>
							Delete
						</div>
					</td>
				</tr>
			</table>
		</paginate>

		<paginate-links :async="true" :show-step-links="true" for="Comments" />

		<modal v-if="showModal" @close="deleteComment">
			<h3 slot="header">Are you sure you want to delete this comment?</h3>
		</modal>
	</div>
</template>

<script>
export default {
	name: 'Comments',
	data () {
		return {
			msg: 'Welcome to the comments section',
			paginate: ['Comments'],
			Comments: [],
			noContent: false,
			showModal: false,
			deleteId: ''
		}
	},
	beforeCreate () {
		this.noContent = false
	},
	created () {
		this.$http.get(`comment/get`).then(
			res => {
				this.Comments = res.body

				if (res.body.length === 0) {
					this.noContent = true
				}
			},
			response => {
				new Error(response)
			}
		)
	},

	methods: {
		deleteComment () {
			this.showModal = false

			if (arguments[0].toString()) {
				this.$http.delete(`comment/delete/${this.deleteId}`).then(
					res => {
						this.Comments = res.body

						if (res.body.length === 0) {
							this.noContent = true
						}
					},
					response => {
						new Error(response)
					}
				)
			}
		}
	}
}
</script>

<style lang="scss" module>
@import '../../assets/sass/tools';

.comments {
	ul:last-of-type {
		li {
			display: inline-block;
		}
	}

	.delete {
		cursor: pointer;
	}
}
</style>
