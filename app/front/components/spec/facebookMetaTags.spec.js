import FacebookMetaTags from '../facebookMetaTags.js';

describe('Component', () => {

	let component;
	const props = {};
	props.faceBookTitle = String;
	props.canonical = String;
	props.faceBookDescription = String;
	props.description = String;

	beforeEach(() => {
		component = new FacebookMetaTags(props);
	});

	describe('FacebookMetaTags', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
