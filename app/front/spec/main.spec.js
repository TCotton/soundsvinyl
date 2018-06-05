import Main from '../Main';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Main;
	});

	describe('Main', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
