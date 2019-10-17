import React from 'react'
import MyAccount from '../MyAccount'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<MyAccount />)
	})

	describe('MyAccount', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
