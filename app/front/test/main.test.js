import React from 'react'
import Main from '../main'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<Main />
			</Router>
			)
	})

	describe('Main', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
