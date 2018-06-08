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

		it('should have state defaults', () => {
			expect(component.state.isClicked).toEqual(false);
		});
	});
});
