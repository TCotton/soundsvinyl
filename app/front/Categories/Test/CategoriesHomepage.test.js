import React from 'react';
import HomePageSearchForm from '../HomePageSearchForm';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<HomePageSearchForm
				search={[]}
			/>
		);
	});

	describe( 'HomePageSearchForm', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
