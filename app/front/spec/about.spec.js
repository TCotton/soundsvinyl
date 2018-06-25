import AboutUs from '../about.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new AboutUs;
	});

	describe('AboutUs', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
		it('has a created hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
