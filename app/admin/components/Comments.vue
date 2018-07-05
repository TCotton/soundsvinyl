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
					<th scope="col">User ID</th>
					<th scope="col">Comment</th>
					<th scope="col">Date</th>
					<th scope="col">Article title</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>

				<tr
					v-for="comment in paginated('Comments')"
					:key="comment._id">
					<th scope="row">{{ comment._id }}</th>
					<td>{{ comment.articleTitle }}</td>
					<td>{{ comment.comment }}</td>
					<td>{{ comment.date }}</td>
					<td>{{ comment.userId }}</td>
					<td><router-link :to="{ name: 'Comment', params: { id: comment._id }}">Edit</router-link></td>
					<td>Delete</td>
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
	import request from 'superagent';
	import { dummy } from '../../helper_constants';

	export default {
		name: 'Comments',
		data () {
			return {
				msg: 'Welcome to the comments section',
				paginate: ['Comments'],
				Comments: []
			}
		},
		created () {
			request
				.get(dummy.comments)
				.end((err, res) => {
					if (err) {
						new Error(err);
					}
					this.Comments = res.body;
					console.dir(res.body);
				});
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
	}
</style>
