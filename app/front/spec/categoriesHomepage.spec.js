import CategoriesHomepage from '../categoriesHomepage';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new CategoriesHomepage;
	});

	describe('CategoriesHomepage', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
