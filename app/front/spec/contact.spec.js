import Contact from '../contact.js';

describe('Component', () => {

	let component;

	const event = {
		target: {},
		value: 'This is a result',
		name: 'contactMessage',
		preventDefault: jasmine.createSpy('preventDefault'),
	};

	beforeEach(() => {
		component = new Contact;
		component.setState = jasmine.createSpy('setState');
	});

	describe('Contact', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})

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

	describe('handleInputChange method', () => {

		it('should have change state correctly', () => {
			component.handleInputChange(event);
			expect(component.setState).toHaveBeenCalled();
		});

	});

	describe('handleSubmit method', () => {

		it('should have call preventDefault', () => {
			component.handleSubmit(event);
			expect(event.preventDefault).toHaveBeenCalled();
		});

	});

	describe('render method', () => {

		it('should have call return when render method called', () => {
			const result = component.render();
			expect(result).toEqual(jasmine.any(Object));
		});

	});
});
