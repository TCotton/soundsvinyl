import React from 'react'
import Disqus from '../Disqus'
import renderer from 'react-test-renderer'
import Video from '../../Page/Video'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Disqus
				id='5b72d35f43f503882567d78d'
				path='/ltj-bukem-and-tayla-bang-the-drums/5b72d35f43f503882567d78d'
				title='LTJ Bukem & Tayla ‎– Bang The Drums'
			/>
		)
	})

	describe('Disqus', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<Disqus
					id='sfd489hfwenslkdnai'
					path='/another-title-here/5b72d35f43f503882567d78d'
					title='Another great song'
				/>
			)
			expect(component).toBeDefined()
		})
	})
})
