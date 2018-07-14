<template>

<div id="root">
    <div class="wrapper">
        <router-view name="Header" />
        <router-view />
        <router-view name="Footer" />
    </div>

    <script
			type="text/x-template"
			id="modal-template">

        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <slot name="header">
                                default header
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="modal-default-button" @click="$emit('close', [true])">
                                    Yes
                                </button>
                                <button class="modal-default-button" @click="$emit('close', [false])">
                                    No
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

    </script>

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

	table {
		text-align: left;
		table-layout: fixed;
		width: 100%;
		white-space: nowrap;
	}

	caption {
		@include font-calculator($font_family_body, 16px, 0.5);
		text-align: left;
	}

	th {
		@include font-calculator($font_family_body, 14px, 0.25);
		font-weight: 500;
		padding: 0 10px 0 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
	}

	td {
		@include font-calculator($font_family_body, 14px, 0.25);
		padding: 0 10px 0 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
	}
</style>
