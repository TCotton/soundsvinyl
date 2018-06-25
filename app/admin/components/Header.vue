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
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header.vue',
		mounted() {
			console.log('Simple Component mounted.')
		}
	}
</script>

<style scoped>

</style>
