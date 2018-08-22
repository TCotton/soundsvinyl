import HomePageSearchForm from '../homePageSearchForm.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new HomePageSearchForm;
	});

	describe('HomePageSearchForm', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
