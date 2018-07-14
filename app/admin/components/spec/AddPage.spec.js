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
	it('has a created a method object', () => {
		expect(component.methods).toEqual(jasmine.any(Object));
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof component.data).toBe('function');
		const defaultData = component.data();
		expect(defaultData.msg).toBe('Welcome to Add Page section');
		expect(defaultData.AddPageForm.title).toEqual(jasmine.any(String));
		expect(defaultData.AddPageForm.subTitle).toEqual(jasmine.any(String));
		expect(defaultData.AddPageForm.videoLink).toEqual(jasmine.any(String));
		expect(defaultData.AddPageForm.descriptionOne).toEqual(jasmine.any(String));
		expect(defaultData.AddPageForm.descriptionTwo).toEqual(jasmine.any(String));
		expect(defaultData.AddPageForm.descriptionThree).toEqual(jasmine.any(String));
		expect(defaultData.AddPageForm.categories).toEqual(jasmine.any(String));
	})
});
