import React from 'react'
import LogoutButton from '../logged0ut'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<LogoutButton />
			</Router>
		)
	})

	describe('LogoutButton', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
