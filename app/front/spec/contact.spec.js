import Contact from '../contact.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Contact;
	});

	describe('Contact', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('should have correct state default values', () => {
			expect(component.state.contactName).toEqual('');
			expect(component.state.contactEmail).toEqual('');
			expect(component.state.contactMessage).toEqual('');
		});

		it('should have correct state default types', () => {
			expect(component.state.contactName).toEqual(jasmine.any(String));
			expect(component.state.contactEmail).toEqual(jasmine.any(String));
			expect(component.state.contactMessage).toEqual(jasmine.any(String));
		});
	});
});
