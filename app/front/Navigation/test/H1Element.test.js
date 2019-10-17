import React from 'react'
import H1Element from '../H1Element'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<H1Element text='headline text' />
			</Router>
		)
	})

	describe('H1Element', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<Router>
					<H1Element text='different headline text' />
				</Router>
			)
			expect(component).toBeDefined()
		})
	})
})
