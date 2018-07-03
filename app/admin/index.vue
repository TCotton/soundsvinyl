<template>
	<div id="root">
		<div class="wrapper">
			<router-view name="Header" />
			<router-view />
			<router-view name="Footer" />
			<p :class="$style.whatever">
				This should be red
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		mode: 'history',
	}
</script>

<style lang="scss" module>
	@import '../assets/sass/tools';

	a:link {
		color: $linkState;
		text-decoration: none;
	}

	a:visited {
		color: $linkState;
	}

	a:focus {
		color: $linkState;
	}

	a:hover {
		color: $linkState;
		text-decoration: underline;
		text-decoration-skip: edges;
		text-decoration-color: $headerColour;
	}

	a:active {
		color: $linkState;
	}

	.whatever {
		background: red;
	}
</style>
