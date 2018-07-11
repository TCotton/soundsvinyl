<template>
	<div :class="$style.pages">
		<h2>{{ msg }}</h2>
		<p v-if="ok"></p>
		<paginate
			:list="Pages"
			:per="10"
			name="Pages"
		>
			<table>
				<caption>Pages list</caption>

				<tr>
					<th scope="col">ID</th>
					<th scope="col">Title</th>
					<th scope="col">Sub-title</th>
					<th scope="col">Video link</th>
					<th scope="col">Description</th>
					<th scope="col">Categories</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>

				<tr
					v-for="page in paginated('Pages')"
					:key="page._id">
					<th scope="row">{{ page._id }}</th>
					<td>{{ page.title }}</td>
					<td>{{ page.subTitle }}</td>
					<td>{{ page.videoLink }}</td>
					<td>{{ page.description }}</td>
					<td>{{ page.categories }}</td>
					<td>
						<router-link :to="{ name: 'Page', params: { id: page._id }}">Edit</router-link>
					</td>
					<td>Delete</td>
				</tr>
			</table>

		</paginate>

		<paginate-links
			:async="true"
			:show-step-links="true"
			for="Pages"
		/>
	</div>
</template>

<script>
	import request from 'superagent';
	import { homeURI } from '../../helper_constants';

	export default {
		name: 'Pages',
		data () {
			return {
				noContent: false,
				msg: 'Welcome to Your Pages section',
				paginate: ['Pages'],
				Pages: []
			}
		},
		beforeCreate () {
			this.noContent = false
		},
		created () {
			request
				.get(`${homeURI}/page/get`)
				.end((err, res) => {
					if (err) {
						new Error(err);
					}
					this.Pages = res.body;

					if (res.body.length === 0) {
						this.noContent = true;
					}
				});
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.pages {
		ul:last-of-type {
			li {
				display: inline-block;
			}
		}
	}
</style>

