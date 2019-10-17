import React from 'react'
import Header from '../header'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<Header />)
	})

	describe('Header', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
