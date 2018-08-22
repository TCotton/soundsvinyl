import Sitemap from '../sitemap.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Sitemap;
	});

	describe('Sitemap', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
