import React from 'react'
import Contact from '../Contact'
import renderer from 'react-test-renderer'
import MyAccount from '../../Account/MyAccount'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<Contact />)
	})

	describe('Contact', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('should render correctly', function(){
			const component = renderer.create(<Contact />);
			const tree = component.toJSON();
			expect(tree).toMatchSnapshot();
		});
	})
})
