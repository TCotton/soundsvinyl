import React from 'react'
import Sitemap from '../sitemap'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<Sitemap />)
	})

	describe('Sitemap', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
