/* eslint-disable jest/no-disabled-tests */
import React from 'react'
import Categories from '../Categories'
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component

	beforeEach(() => {
		component = renderer.create(
			<Router>
				<Categories tag='blues' />
			</Router>
			)
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})

	it.skip('should render correctly', function(){
		const component = renderer.create(
			<Router>
				<Categories tag='blues' />
			</Router>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
})
