import React from 'react'
import ListElement from '../ListElement'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<ListElement text='text here' />)
	})

	describe('ListElement', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(<ListElement text='different text here' />)
			expect(component).toBeDefined()
		})
	})
})
