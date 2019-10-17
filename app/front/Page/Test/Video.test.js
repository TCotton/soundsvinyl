import React from 'react'
import Video from '../video'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component

	beforeEach(() => {
		component = renderer.create(<Video videoLink='https://videolink.url' />)
	})

	describe('Video', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(<Video videoLink='https://adifferentbideolink.url' />)

			expect(component).toBeDefined()
		})
	})
})
