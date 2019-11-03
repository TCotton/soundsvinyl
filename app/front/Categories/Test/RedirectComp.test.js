import React from 'react'
import RedirectComp from '../RedirectComp'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'

const randomString = () => {
	return (
		Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.substr(0, 5) + '/'
	)
}

const randomURI = () => {
	return (randomString() + randomString() + randomString()).toString()
}

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<RedirectComp search={false} />
			</Router>
		)
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})

	describe('RedirectComponent', () => {

		it('can be updated', () => {
			component.update(
				<Router>
					<RedirectComp search='another-different-url' />
				</Router>
			)

			expect(component).toBeDefined()
		})
	})
})
