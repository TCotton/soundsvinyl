import Vue from 'vue';
import { thumbnailOne } from '../../../alternative_default_thumbnails';

/**
 * props thumbnailUrl is passed by reference to imageURI, so that no thumbnailUrl is mutated
 * if image is not present then the @error directive will give the imageURI data the default embedded data URI
 */

Vue.component('thumbnail', {
	data () {
		return {
			imageURI: '',
		}
	},
	template: `  
    <img v-bind:src="imageURI" @error="imageLoadOnError">
  `,
	created () {
		this.imageURI = this.thumbnailUrl;
	},
	methods: {
		imageLoadOnError () {
			this.imageURI = thumbnailOne;
		}
	},
	props: {
		thumbnailUrl: {
			type: String,
			required: true,
			default: thumbnailOne,
		}
	}
});
