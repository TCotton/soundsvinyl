import React from 'react'
import Sitemap from '../sitemap'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router-dom'
import PageUnit from '../../Page/PageUnit'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(<Sitemap />)
	})

	describe('Sitemap', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it( 'snapshot', () => {

			const sitemap = renderer
				.create(
					<Sitemap />
				)
				.toJSON();

			expect( sitemap ).toMatchSnapshot();
		});
	})
})
