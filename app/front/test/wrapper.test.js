import React from 'react';
import Wrapper from '../Wrapper';
import renderer from 'react-test-renderer';

describe('Component', () => {
	let component

	describe('Wrapper', () => {

		beforeEach( () => {
			component = renderer.create( <Wrapper /> )
		})

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'should render correctly', function() {
			const component = renderer.create( <Wrapper /> );
			const tree = component.toJSON();
			expect( tree ).toMatchSnapshot();
		});
	})
})
