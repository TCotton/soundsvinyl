import Video from '../video.js';

describe('Component', () => {

	let component;
	const props = {};
	props.videoLink = 'https://u2f3k8w8.stackpathcdn.com/videos/the-ladder-one-creed-2.mp4';

	beforeEach(() => {
		component = new Video(props);
	});

	describe('Video', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
