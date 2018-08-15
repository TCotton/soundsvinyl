import HomePageSearchForm from '../HomePageSearchForm';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new HomePageSearchForm();
	});

	describe('Comment', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
