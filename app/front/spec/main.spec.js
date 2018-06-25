import Main from '../main.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Main;
	});

	describe('Main', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
