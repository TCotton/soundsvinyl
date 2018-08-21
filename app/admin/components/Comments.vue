<template>
	<div :class="$style.comments">

		<h2>{{ msg }}</h2>
		<paginate
			:list="Comments"
			:per="10"
			name="Comments"
		>

			<table>
				<caption>Comments list</caption>

				<tr>
					<th scope="col">ID</th>
					<th scope="col">User name</th>
					<th scope="col">Comment</th>
					<th scope="col">Date</th>

					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>

				<tr
					v-for="comment in paginated('Comments')"
					:key="comment._id">
					<th scope="row">{{ comment.articleId }}</th>
					<td>{{ comment.userName }}</td>
					<td>{{ comment.content }}</td>
					<td>{{ comment.date }}</td>

					<td>
						<router-link :to="{ name: 'Comment', params: { id: comment._id }}">Edit</router-link>
					</td>
					<td>
						Delete
					</td>
				</tr>
			</table>

		</paginate>

		<paginate-links
			:async="true"
			:show-step-links="true"
			for="Comments"
		/>

	</div>
</template>

<script>

	/**
	 * articleId
	 :
	 "5b72d2bf43f503882567d78a"
	 content
	 :
	 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tempor ultricies. In hac habitasse platea dictumst. Sed non leo eget tortor euismod suscipit. Cras luctus ex mi, in consequat sem imperdiet sed. Mauris nec tincidunt massa. Nam luctus laoreet nisi. Vivamus libero enim, condimentum non enim aliquet, tristique faucibus libero. Donec lobortis semper dictum. Aliquam at sem quis erat lobortis imperdiet at tempor ex."
	 date
	 :
	 "2018-08-18T16:13:23.845Z"
	 published
	 :
	 false
	 userId
	 :
	 "5b749811c48b19e79fb2783f"
	 userName
	 :
	 "me_15thAug18"
	 */

	export default {
		name: 'Comments',
		data () {
			return {
				msg: 'Welcome to the comments section',
				paginate: ['Comments'],
				Comments: [],
				noContent: false,
			}
		},
		beforeCreate () {
			this.noContent = false
		},
		created () {
			this.$http.get(`comment/get`).then(res => {

				this.Comments = res.body;
				console.dir(res.body);

				if (res.body.length === 0) {
					this.noContent = true;
				}

			}, (response) => {
				new Error(response);
			});
		},
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
	}
</style>
