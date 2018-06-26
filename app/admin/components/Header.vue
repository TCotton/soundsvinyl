<template>
	<header>
		<div styleName='innerHeader' className='wrapper'>
			<div styleName='headerLeftColumn'>
				<TurntableIllustration/>
			</div>
			<div styleName='headerRightColumn'>
				<h2>Welcome to Soundsvinyl</h2>
				<p>Nam vel ornare lorem sed eleifend egestas
					dui eu pretium sem mollis et</p>
			</div>

			<p :class="$style.whatever">
				This should be red
			</p>

		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		mounted() {
			console.log('Simple Component mounted.')
		}
	}
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';
</style>
