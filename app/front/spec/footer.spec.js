import Footer from '../footer.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Footer;
	});

	describe('Footer', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
