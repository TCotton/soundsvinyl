import React from 'react'
import VinylCharts from '../vinylCharts'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<VinylCharts />)
	})

	describe('VinylCharts', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
