import React from 'react'
import Nav from '../nav'
import renderer from 'react-test-renderer'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<CookiesProvider>
					<Nav />
				</CookiesProvider>
			</Router>
		)
	})

	describe('Nav', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
