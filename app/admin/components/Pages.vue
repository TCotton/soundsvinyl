<template>
	<div :class="$style.pages">
		<h2>{{ msg }}</h2>
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
					<th scope="col">Description Paragraph One</th>
					<th scope="col">Description Paragraph Two</th>
					<th scope="col">Description Paragraph Three</th>
					<th scope="col">Date created</th>
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
					<td>{{ page.addPageDescriptionOne }}</td>
					<td>{{ page.addPageDescriptionTwo }}</td>
					<td>{{ page.addPageDescriptionThree }}</td>
					<td>{{ page.date }}</td>
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
			this.$http.get(`${homeURI}/page/get`).then(res => {

				this.Pages = res.body;

				if (res.body.length === 0) {
					this.noContent = true;
				}

			}, response => {
				new Error(response);
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

