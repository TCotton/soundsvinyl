import React from 'react';
import Wrapper from '../Wrapper';
import renderer from 'react-test-renderer';

describe('Component', () => {
	let component

	describe.skip('Wrapper', () => {

		beforeEach( () => {
			component = renderer.create( <Wrapper /> )
		})

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})
	})
})
