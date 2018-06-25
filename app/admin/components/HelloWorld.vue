<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li>Here is the list</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			console.log('the Hello World is mounted');
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/sass/tools';
	@import '../../assets/sass/starter';
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
