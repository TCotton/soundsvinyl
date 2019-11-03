import React from 'react';
import Wrapper from '../Wrapper';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component

	describe('Wrapper', () => {

		beforeEach( () => {
			component = renderer.create(
				<Router>
					<Wrapper />
				</Router>
				)
		})

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})
	})
})
