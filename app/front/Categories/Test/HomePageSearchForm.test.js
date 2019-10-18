import React from 'react'
import { HomePageSearchForm } from '../homePageSearchForm'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<HomePageSearchForm />
			</Router>
		)
	})

	describe('HomePageSearchForm', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
