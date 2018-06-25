import Error from '../error.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Error;
	});

	describe('Error', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
