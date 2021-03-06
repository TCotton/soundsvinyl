import React from 'react'
import LoginButton from '../loggedIn'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<LoginButton />
			</Router>
		)
	})

	describe('LoginButton', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
