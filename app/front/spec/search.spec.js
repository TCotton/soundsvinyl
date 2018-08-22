import Search from '../Search.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Search;
	});

	describe('Search', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
