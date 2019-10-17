import Comment from '../Comment.vue'

describe('Component Comment', () => {
	let component

	beforeEach(() => {
		component = Comment
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})

	// Inspect the raw component options
	// hook temporarily removed
	it('has a created hook', () => {
		expect(component.mounted).toEqual(jasmine.any(Function))
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof component.data).toBe('function')
		const defaultData = component.data()
		expect(defaultData.msg).toBe('Welcome the individual comment section')
	})
})
