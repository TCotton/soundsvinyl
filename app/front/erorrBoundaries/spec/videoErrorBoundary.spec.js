import VideoErrorBoundary from '../videoErrorBoundary.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new VideoErrorBoundary;
	});

	describe('VideoErrorBoundary', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('should have default state of hasError to be false', () => {
			expect(component.state.hasError).toBe(false);
		});
	});
});
