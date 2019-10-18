import React from 'react'
import RecordListing from '../recordListing.js'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	const match = {
		params: {
			id: '5349b4ddd2781d08c09890f4'
		}
	}
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<RecordListing match={match} />
			</Router>
		)
	})

	describe('RecordListing', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			match.params.id
				.split('')
				.reverse()
				.join('')
			component.update(
				<Router>
					<RecordListing match={match} />
				</Router>
			)

			expect(component).toBeDefined()
		})
	})
})
