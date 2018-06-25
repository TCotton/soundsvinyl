<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Page</h2>
		<ul>
			<li>Here is the list</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Page',
		data () {
			return {
				msg: 'Welcome to Your Page section'
			}
		},
		mounted() {
			console.log('the page section is mounted');
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
