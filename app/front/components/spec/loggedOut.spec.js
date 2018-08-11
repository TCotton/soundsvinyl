import LogoutButton from '../logged0ut.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new LogoutButton;
	});

	describe('LogoutButton', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
