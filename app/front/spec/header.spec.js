import Header from '../Header';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Header;
	});

	describe('Header', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
