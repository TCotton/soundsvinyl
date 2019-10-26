/* eslint-disable jest/no-disabled-tests */
import React from 'react'
import MyAccount from '../MyAccount'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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

		it.skip('Should work correctly onSubmit for form[1]', function(){

			const component = mount(<MyAccount />);
			const mockPreventDefault = jest.fn();
			const mockEvent = {
				preventDefault: mockPreventDefault
			};

			const spy = jest.spyOn(component.instance(), 'handleSubmit');
			component.instance().forceUpdate();

			component.instance().handleSubmit(mockEvent);
			expect(spy).toReturn();
			expect(mockPreventDefault).toHaveBeenCalled();


			/**
			 * Currently, event simulation for the shallow renderer does not propagate as one would normally expect in a real environment. As a result, one must call .simulate() on the actual node that has the event handler set.
Even though the name would imply this simulates an actual event, .simulate() will in fact target the component's prop based on the event you give it. For example, .simulate('click') will actually get the onClick prop and call it.
As noted in the function signature above passing a mock event is optional. Keep in mind that if the code you are testing uses the event for something like, calling event.preventDefault() or accessing any of its properties you must provide a mock event object with the properties your code requir
			 */

		})
	})
})
/* eslint-enable jest/no-disabled-tests */
