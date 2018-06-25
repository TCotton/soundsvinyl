import Nav from '../nav.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Nav;
	});

	describe('Nav', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})

		it('should have correct state default values', () => {
			expect(component.state.isClicked).toEqual(false);
		});

		it('should have correct state default types', () => {
			expect(component.state.isClicked).toEqual(jasmine.any(Boolean));
		});
	});
});
