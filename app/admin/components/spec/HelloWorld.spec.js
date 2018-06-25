import HelloWorld from '../HelloWorld.vue';

describe('Component HelloWorld', () => {

	let component;

	beforeEach(() => {
		component = HelloWorld;
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
		expect(defaultData.msg).toBe('Welcome to Your Vue.js App');
	})
});
