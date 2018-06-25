import RecordListing from '../recordListing.js'

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new RecordListing;
	});

	describe('RecordListing', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
