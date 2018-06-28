import AddPage from '../AddPage.vue';

describe('Component AddPage', () => {

	let component;

	beforeEach(() => {
		component = AddPage;
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
		expect(defaultData.msg).toBe('Welcome to Add Page section');
	})
});
