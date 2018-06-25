import Account from '../account.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Account;
	});

	describe('Account', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});

	it('should have correct state default values', () => {
		expect(component.state.loginName).toEqual('');
		expect(component.state.loginPassword).toEqual('');
		expect(component.state.registerName).toEqual('');
		expect(component.state.registerPassword).toEqual('');
	});

	it('should have correct state default types', () => {
		expect(component.state.loginName).toEqual(jasmine.any(String));
		expect(component.state.loginPassword).toEqual(jasmine.any(String));
		expect(component.state.registerName).toEqual(jasmine.any(String));
		expect(component.state.registerPassword).toEqual(jasmine.any(String));
	});
});
