import React from 'react'
import FacebookMetaTags from '../FacebookMetaTags'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import RecordListing from '../../recordListing'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<FacebookMetaTags
				canonical='http://www.path.com'
				faceBookDescription='A facebook description'
				faceBookTitle='a facebook title'
			/>
		)
	})

	describe('FacebookMetaTags', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<Router>
					<RecordListing
						canonical='http://www.anotherpath.com'
						faceBookDescription='Another facebook description'
						faceBookTitle='another facebook title'
					/>
				</Router>
			)

			expect(component).toBeDefined()
		})
	})
})
