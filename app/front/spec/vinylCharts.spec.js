import VinylCharts from '../vinylCharts'

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new VinylCharts;
	});

	describe('VinylCharts', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
