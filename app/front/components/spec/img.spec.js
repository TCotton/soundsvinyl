import Img from '../img.js';

describe('Component', () => {

	let component;
	const props = {
		className: '',
		src: '',
		alt: '',
	}

	beforeEach(() => {
		component = new Img(props);
	});

	describe('Img', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
