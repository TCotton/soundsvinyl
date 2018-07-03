<template>
	<header :class="$style.navHeader">
		<div :class="$style.navLeftColumn">
			<h1>soundsvinyl.co</h1>
		</div>
		<div :class="$style.navRightColumn">
			<h1>soundsvinyl.co</h1>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		mounted() {
			console.log('Simple Header Component mounted.');
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	.navHeader {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-gap: 0;
	}

	.navLeftColumn {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.navRightColumn {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
</style>
