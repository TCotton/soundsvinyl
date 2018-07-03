<template>
	<header :class="$style.navHeader">
		<div :class="$style.navLeftColumn">
			<router-link to="/admin"><h1>soundsvinyl.co</h1></router-link>
		</div>
		<div :class="$style.navRightColumn">
			<router-link to="/admin"><p>Logout</p></router-link>
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
		justify-content: flex-end;
	}
</style>
