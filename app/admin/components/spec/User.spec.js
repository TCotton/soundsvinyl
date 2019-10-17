import User from '../User.vue'

describe('Component User', () => {
	let component
	const $route = {
		params: {
			id: ''
		}
	}

	beforeEach(() => {
		component = User
		component.$route = $route
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})

	// Inspect the raw component options
	it('has a created hook', () => {
		expect(component.mounted).toEqual(jasmine.any(Function))
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof component.data).toBe('function')
		const defaultData = component.data()
		expect(defaultData.msg).toBe('Welcome to the individual user section')
		expect(defaultData.editUser.email).toEqual(jasmine.any(String))
		expect(defaultData.editUser.password).toEqual(jasmine.any(String))
		expect(defaultData.editUser.passwordTwo).toEqual(jasmine.any(String))
	})
})
