import React from 'react'
import UnorderedList from '../UnorderedList'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<UnorderedList isClicked='aClassName' />
			</Router>
		)
	})

	describe('UnorderedList', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<Router>
					<UnorderedList isClicked='aDifferentClassName' />
				</Router>
			)
			expect(component).toBeDefined()
		})
	})
})
