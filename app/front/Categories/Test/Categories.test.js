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
				<Categories />
			</Router>
			)
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})

	it('should render correctly', function(){
		const component = renderer.create(
			<Router>
				<Categories />
			</Router>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
})
