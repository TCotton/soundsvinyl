import React from 'react'
import Sitemap from '../sitemap'
import renderer from 'react-test-renderer'
import mockAxios from 'jest-mock-axios';
import { homeURI } from '../../../helper_constants'
import { mount, shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import '../../../../enzymeConfig';
import PageUnit from '../../Page/PageUnit'

describe('Component', () => {
	let component;
	let componentInstance;
	let result;
	beforeEach(() => {
		component = renderer.create(<Sitemap />)
	})

	afterEach(() => {
		// cleaning up the mess left behind the previous test
		mockAxios.reset();
	});

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

	describe('Sitemap componentDidMount', () => {

		beforeEach( () => {
			component = mount(
				<Sitemap />
			);

			componentInstance = component.instance();
			result = componentInstance.state;
		});

		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it( 'should return array for customPages', () => {
			expect( result.customPages ).toEqual( expect.any( Array ) );
		});

		it( 'should return null for error', () => {
			expect( result.error ).toEqual( null );
		});

		it( 'should return array for customPages', () => {
			expect( result.pages ).toEqual( expect.any( Array ) );
		});


	});
})
