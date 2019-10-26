import React from 'react'
import RawTwitterMetaTags from '../RawTwitterMetaTags'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component

	beforeEach(() => {
		component = renderer.create(
			<RawTwitterMetaTags
				description='This is a description'
				title='This is a title'
			/>
		)
	})

	describe('RawTwitterMetaTags', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<RawTwitterMetaTags
					description='This is a different description'
					title='This is a different title'
				/>
			)

			expect(component).toBeDefined()
		})
	})
})
