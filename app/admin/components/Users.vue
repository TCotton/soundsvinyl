<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Users</h2>
		<ul>
			<li>Here is the list</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Users',
		data () {
			return {
				msg: 'Welcome to Your Users section',
				Users: []
			}
		},
		created() {
			const userPromise = new Promise((resolve, reject) => {
					console.log("It is done.");
					// Succeed half of the time.
					if (Math.random() > .5) {
						resolve("SUCCESS")
					} else {
						reject("FAILURE")
					}
				});

			promise.then(() => {
				console.log('success');
			}, () => {
				console.log('failure');
			});


			// https://api.mockaroo.com/api/35094270?count=20&key=004476f0
		},
		mounted() {
			console.log('the pages section is mounted');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
	h1, h2 {
		font-weight: normal;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
