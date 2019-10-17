import React from 'react'
import Pagination from '../Pagination'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Pagination
				articlesPerPage={10}
				current={1}
				maximum={10}
				onChangePagination={() => {}} // eslint-disable-line
				total={10}
			/>
		)
	})

	describe('Pagination', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
