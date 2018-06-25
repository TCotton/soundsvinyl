import Pages from '../Pages.vue';

describe('Component Pages', () => {

	let component;

	beforeEach(() => {
		component = Pages;
	});

	it('should be defined', () => {
		expect(component).toBeDefined();
	});

	// Inspect the raw component options
	it('has a created hook', () => {
		expect(typeof component.mounted).toBe('function');
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof component.data).toBe('function');
		const defaultData = component.data();
		expect(defaultData.msg).toBe('Welcome to Your Pages section');
	})
});
