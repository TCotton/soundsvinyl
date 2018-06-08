import Error from '../error';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Error;
	});

	describe('Error', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
