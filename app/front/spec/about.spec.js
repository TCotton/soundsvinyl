import About from '../about.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new About;
	});

	describe('About', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
