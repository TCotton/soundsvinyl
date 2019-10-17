import React from 'react'
import MyAccount from '../MyAccount'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../../enzymeConfig';

describe.only('Component', () => {
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

		it('Should capture name correctly in form[0] onChange and change the props accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(0).find('input').at(0);

			input.instance().value = 'Andy';
			input.simulate('change');
			expect(component.find('form').at(0).find('input').at(0).props().value).toEqual('Andy');
		})

		it('Should capture password correctly in form[0] onChange and change the props accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(0).find('input').at(1);

			input.instance().value = 'aPassword';
			input.simulate('change');
			expect(component.find('form').at(0).find('input').at(1).props().value).toEqual('aPassword');
		})

		it('Should capture name correctly in form[1] onChange and change the props accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(1).find('input').at(0);

			input.instance().value = 'Andy';
			input.simulate('change');
			expect(component.find('form').at(1).find('input').at(0).props().value).toEqual('Andy');
		})

		it('Should capture password correctly in form[1] onChange and change the props accordingly', function(){

			const component = mount(<MyAccount />);
			const input = component.find('form').at(1).find('input').at(1);

			input.instance().value = 'aPassword';
			input.simulate('change');
			expect(component.find('form').at(1).find('input').at(1).props().value).toEqual('aPassword');
		})

	})
})
