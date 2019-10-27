import React from 'react'
import PageUnit from '../PageUnit'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import '../../../../enzymeConfig';
import { MemoryRouter as Router } from 'react-router-dom';
// import Observer from '@researchgate/react-intersection-observer';
// need to integrate @researchgate/react-intersection-observer';
describe.skip( 'Component', () => {
	let component

	const props = {
		id: '507f191e810c19729de860ea',
		slug: 'this-is-a-slug',
		subtitle: 'This is a subtitle',
		thumbnailUrl: 'https://thumbnailurl.com',
		title: 'This is a title'
	}

	beforeEach( () => {
		component = renderer.create(
			<Router>
				<PageUnit {...props} />
			</Router>
		)
	})

	describe( 'PageUnit', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'snapshot', () => {

			const articleImage = renderer
				.create(
					<Router>
						<PageUnit {...props} />
					</Router>
				)
				.toJSON();

			expect( articleImage ).toMatchSnapshot();
		});
		// need to resolved props now '@researchgate/react-intersection-observer' is for IntersectionObserver
		it.skip( 'can be updated', () => {
			component.update(
				<Router>
					<PageUnit
						id='507f191e810c19729da860ea'
						slug='this-is-another-slug'
						subtitle='This is anothe subtitle'
						thumbnailUrl='https://thumbnailurl.co.uk'
						title='This is another title'
					/>
				</Router>
			)

			expect( component ).toBeDefined()
		})

		// '@researchgate/react-intersection-observer' now handles error in the handleIntersection method

		describe.skip( 'handling onError on image', () => {

			let component;
			let componentInstance;

			beforeAll( () => {
				component = mount(
					<Router>
						<PageUnit
							id='507f191e810c19729da860ea'
							slug='this-is-another-slug'
							subtitle='This is another subtitle'
							thumbnailUrl='not_a_URL'
							title='This is another title'
						/>
					</Router> ).find( PageUnit );

				componentInstance = component.instance();

			});

			it( 'Calls onError when passed bad src', () => {
				const event = {};
				event.target = {};

				componentInstance.handleOnError( event );

				expect( event.target.className ).toBeDefined( );
				expect( event.target.src ).toBeDefined( );
				expect( event.target.alt ).toBeDefined( );

				expect( event.target.className ).toEqual( expect.any( String ) );
				expect( event.target.src ).toEqual( expect.any( String ) );
				expect( event.target.alt ).toEqual( expect.any( String ) );

				expect( event.target.alt ).toHaveLength(0);
				expect( event.target.className.length ).toBeGreaterThan(0);
				expect( event.target.src.length ).toBeGreaterThan(0);
			});
		})
	})
})
