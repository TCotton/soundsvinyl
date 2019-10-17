import AddUser from '../AddUser.vue'

describe('Component AddUser', () => {
	let component

	beforeEach(() => {
		component = AddUser
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})

	// Inspect the raw component options
	it('has a created methods object', () => {
		expect(component.methods).toEqual(jasmine.any(Object))
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof component.data).toBe('function')
		const defaultData = component.data()
		expect(defaultData.msg).toBe('Welcome to Add User section')
		expect(defaultData.addUser.email).toEqual(jasmine.any(String))
		expect(defaultData.addUser.password).toEqual(jasmine.any(String))
		expect(defaultData.addUser.passwordTwo).toEqual(jasmine.any(String))
	})

	/*xit('sets the correct default methods', () => {
		expect(typeof component.methods).toEqual('object');

		defaultMethods.onSubmit(event);
		expect(defaultMethods.onSubmit).toHaveBeenCalled();
		defaultMethods = component.methods;
		expect(defaultMethods.onSubmit).toEqual(jasmine.any('function'));
		expect(defaultMethods.validEmail).toEqual(jasmine.any('function'));
	});*/
})
