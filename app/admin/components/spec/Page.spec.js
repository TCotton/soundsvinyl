import Page from '../Page.vue';

describe('Component Page', () => {

	let component;

	beforeEach(() => {
		component = Page;
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
		expect(defaultData.msg).toBe('Welcome the individual page section');
		expect(defaultData.EditPageForm._id).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.title).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.subTitle).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.videoLink).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.descriptionOne).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.descriptionTwo).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.descriptionTwo).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.categories).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.date).toEqual(jasmine.any(String));
		expect(defaultData.EditPageForm.editUserId).toEqual(jasmine.any(String));
	})
});
