<script>
	import Vue from 'vue';

	Vue.component('modal', {
		template: '#modal-template'
	})
</script>

<style lang="scss" module>
	@import '../../assets/sass/tools';

	:global .modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	:global .modal-wrapper {
		display: table-cell;
		vertical-align: middle;
		padding: 15px;
	}

	:global .modal-container {
		width: 300px;
		margin: 0 auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
	}

	:global .modal-header h3 {
		line-height: 1.3em;
	}

	:global .modal-body {
		margin: 20px 0;
	}

	:global .modal-footer {
		display: grid;
		grid-template-columns: calc(50% - 15px) calc(50% - 15px);
		grid-gap: 30px;
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			@include font-calculator($font_family_body, 14px, 0);
			padding: 5px 0;
			background: $footerAdminBackground;
			box-shadow: none;
			border: 1px solid $formSubmitHover;
			&:hover {
				background: $formSubmitHover;
			}
		}
	}

	/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

	:global .modal-enter {
		opacity: 0;
	}

	:global .modal-leave-active {
		opacity: 0;
	}

	:global .modal-enter .modal-container {
		transform: scale(1.1);
	}

	:global .modal-leave-active .modal-container {
		transform: scale(1.1);
	}
</style>
