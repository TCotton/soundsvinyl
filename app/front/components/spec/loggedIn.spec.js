import LoginButton from '../loggedIn'

describe('Component', () => {

	let component;
	let props = {};
	props.onClick = () => {};

	beforeEach(() => {
		component = new LoginButton(props);
	});

	describe('LoginButton', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
