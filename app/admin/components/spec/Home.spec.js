import Home from '../Home.vue'

describe('Component Home', () => {
	let component

	beforeEach(() => {
		component = Home
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})

	it('has a created mounted created hook', () => {
		expect(component.created).toEqual(jasmine.any(Function))
	})

	it('has a created  created hook', () => {
		expect(component.created).toEqual(jasmine.any(Function))
	})

	it('has a created beforeMount hook', () => {
		expect(component.beforeMount).toEqual(jasmine.any(Function))
	})

	it('has a created mounted hook', () => {
		expect(component.mounted).toEqual(jasmine.any(Function))
	})

	it('has a created updated hook', () => {
		expect(component.updated).toEqual(jasmine.any(Function))
	})

	it('has a created updated hook', () => {
		expect(component.updated).toEqual(jasmine.any(Function))
	})

	it('has a created beforeDestroy hook', () => {
		expect(component.beforeDestroy).toEqual(jasmine.any(Function))
	})

	it('has a created destroyed hook', () => {
		expect(component.destroyed).toEqual(jasmine.any(Function))
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof component.data).toBe('function')
		const defaultData = component.data()
		expect(defaultData.msg).toBe('Welcome to Your Homepage')
	})
})
