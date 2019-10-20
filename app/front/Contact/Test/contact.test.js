import React from 'react'
import Contact from '../Contact'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import '../../../../enzymeConfig';

describe('Component', () => {
	let component;
	let componentInstance;
	let result;

	describe('Contact', () => {

		beforeEach(() => {
			component = renderer.create(<Contact />)
		})

		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('should render correctly', function(){
			const component = renderer.create(<Contact />);
			const tree = component.toJSON();
			expect(tree).toMatchSnapshot();
		});
	})

	describe('Contact initial default state', () => {

		beforeEach( () => {
			component = mount(
				<Contact />
			);

			componentInstance = component.instance();
			result = componentInstance.state;
		});

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'should return string for contactName', () => {
			expect( result.contactName ).toEqual( expect.any( String ) );
		});

		it( 'should return string for contactEmail', () => {
			expect( result.contactEmail ).toEqual( expect.any( String )  );
		});

		it( 'should return string for contactMessage', () => {
			expect( result.contactMessage ).toEqual( expect.any( String ) );
		});

		it( 'should return string for zipcode', () => {
			expect( result.zipcode ).toEqual( expect.any( String ) );
		});

		it( 'should return null for error', () => {
			expect( result.error ).toEqual( null );
		});

		it( 'should return null for message', () => {
			expect( result.message ).toEqual( null );
		});
	});
})
