<template>
	<div :class="$style.pages">
		<h1>{{ msg }}</h1>
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
				v-for="page in Pages"
				:key="page._id">
				<th scope="row">{{ page._id }}</th>
				<td>{{ page.title }}</td>
				<td>{{ page.subTitle }}</td>
				<td>{{ page.videoLink }}</td>
				<td>{{ page.description }}</td>
				<td>{{ page.categories }}</td>
				<td>Edit</td>
				<td>Delete</td>
			</tr>

		</table>
	</div>
</template>

<script>
	import request from 'superagent';
	import { dummy } from '../../helper_constants';

	export default {
		name: 'Pages',
		data () {
			return {
				msg: 'Welcome to Your Pages section',
				Pages: []
			}
		},
		created () {
			request
				.get(dummy.pages)
				.end((err, res) => {
					if (err) {
						new Error(err);
					}
					console.dir(res.body);
					this.Pages = res.body;
				});
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
	.pages {
		background: transparent;
	}
</style>

