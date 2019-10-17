import React from 'react'
import Footer from '../footer'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<Footer />
			</Router>
		)
	})

	describe('Footer', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
