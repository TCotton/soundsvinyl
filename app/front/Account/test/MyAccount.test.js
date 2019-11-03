import React from 'react'
import MyAccount from '../MyAccount'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Cookies from 'universal-cookie';
import mockAxios from 'axios';
import '../../../../enzymeConfig';

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<MyAccount />)
	})

	describe('MyAccount', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('should render correctly', function(){
			const component = renderer.create(<MyAccount />);
			const tree = component.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('Should capture name correctly in form[0] onChange and change the state accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(0).find('input').at(0);

			input.instance().value = 'Andy';
			input.simulate('change');
			expect(component.state().loginFormloginName).toEqual('Andy');
		})

		it('Should capture password correctly in form[0] onChange and change the state accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(0).find('input').at(1);

			input.instance().value = 'aPassword';
			input.simulate('change');
			expect(component.state().loginFormloginPassword).toEqual('aPassword');
		})

		it('Should work correctly onSubmit for form[0]', function(){

			const component = mount(<MyAccount />);

			const fakeEvent = jest.fn()

			const nameInput = component.find('form').at(0).find('input').at(0);
			nameInput.instance().value = 'Andy';
			nameInput.simulate('change');

			const passwordInput = component.find('form').at(0).find('input').at(1);

			passwordInput.instance().value = 'aPassword';
			passwordInput.simulate('change');

			component.find('form').at(0).find('input').at(2).simulate('submit', fakeEvent);

			expect(component.state().loginFormloginName).toEqual('Andy');
			expect(component.state().loginFormloginPassword).toEqual('aPassword');

		})

		it('Should capture name correctly in form[1] onChange and change the state accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(1).find('input').at(0);

			input.instance().value = 'Andy';
			input.simulate('change');
			expect(component.state().registerFormloginName).toEqual('Andy');
		})

		it('Should capture password correctly in form[1] onChange and change the state accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(1).find('input').at(1);

			input.instance().value = 'aPassword';
			input.simulate('change');
			expect(component.state().registerFormloginPassword).toEqual('aPassword');
		})

		it('Should work change state error to null if state registerFormloginName && registerFormloginPassword is true', function(){

			const component = mount(<MyAccount />);
			const mockPreventDefault = jest.fn();
			const mockEvent = {
				preventDefault: mockPreventDefault
			}

			component.instance().state.error = 'An error';
			component.instance().state.registerFormloginName = 'Andy Walpole';
			component.instance().state.registerFormloginPassword = 'A Password';


			jest.spyOn(component.instance(), 'handleSubmitRegister');
			component.instance().forceUpdate();

			component.instance().handleSubmitRegister(mockEvent);
			expect(mockPreventDefault).toHaveBeenCalled();
			expect(component.instance().state.error).toBe(null);
		})

		it('Should work call axios.post if registerFormloginName && registerFormloginPassword is true', function(){

			const component = mount(<MyAccount />);
			const mockPreventDefault = jest.fn();
			const mockEvent = {
				preventDefault: mockPreventDefault
			}

			mockAxios.post.mockImplementationOnce(() =>
				Promise.resolve({
					data: {
						auth: true,
						token: 'aTokenRightHere'
					}
				})
			);

			Cookies.get = jest.fn();

			component.instance().state.registerFormloginName = 'Andy Walpole';
			component.instance().state.registerFormloginPassword = 'A Password';

			jest.spyOn(component.instance(), 'handleSubmitRegister');
			component.instance().forceUpdate();

			component.instance().handleSubmitRegister(mockEvent);
			expect(mockPreventDefault).toHaveBeenCalled();
			expect(mockAxios.post).toHaveBeenCalled();
		})
	})
})
