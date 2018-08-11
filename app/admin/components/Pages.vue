<template>
	<div :class="$style.pages">
		<h2>{{ msg }}</h2>
		<p v-show="noContent">There are no pages in database</p>
		<paginate
			:list="Pages"
			:per="10"
			name="Pages"
		>
			<table v-show="!noContent">
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
					<td>{{ page.descriptionOne }}</td>
					<td>{{ page.descriptionTwo }}</td>
					<td>{{ page.descriptionThree }}</td>
					<td>{{ page.date }}</td>
					<td>
						<router-link :to="{ name: 'Page', params: { id: page._id }}">Edit</router-link>
					</td>
					<td>
						<div @click="showModal = true, deleteId = page._id" :class="$style.delete">Delete</div>
					</td>
				</tr>
			</table>

		</paginate>

		<paginate-links
			:async="true"
			:show-step-links="true"
			for="Pages"
		/>

		<modal
			v-if="showModal"
			@close="deletePage">
			<h3 slot="header">Are you sure you want to delete this page?</h3>
		</modal>

	</div>
</template>

<script>
	export default {
		name: 'Pages',
		data () {
			return {
				noContent: false,
				msg: 'Welcome to the page section',
				paginate: ['Pages'],
				Pages: [],
				showModal: false,
				deleteId: '',
			}
		},
		beforeCreate () {
			this.noContent = false
		},
		created () {
			this.$http.get(`page/get`).then(res => {

				this.Pages = res.body.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				});

				if (res.body.length === 0) {
					this.noContent = true;
				}

			}, (response) => {
				new Error(response);
			});
		},
		methods: {
			deletePage (...args) {
				this.showModal = false;

				if (arguments[0]) {
					this.$http.delete(`page/delete/${this.deleteId}`).then(res => {

						this.Pages = res.body;

						if (res.body.length === 0) {
							this.noContent = true;
						}

					}, response => {
						new Error(response);
					});
				}
			}
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

		.delete {
			cursor: pointer;
		}
	}
</style>

