import Home from '../Home.vue';

describe('Component Home', () => {

	let component;

	beforeEach(() => {
		component = Home;
	});

	it('should be defined', () => {
		expect(component).toBeDefined();
	});

	// Inspect the raw component options
	it('has a created hook', () => {
		expect(component.mounted).toEqual(jasmine.any(Function));
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof component.data).toBe('function');
		const defaultData = component.data();
		expect(defaultData.msg).toBe('Welcome to Your Homepage');
	})
});
