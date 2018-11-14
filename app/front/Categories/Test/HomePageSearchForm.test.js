import React from 'react';
import HomePageSearchForm from '../homePageSearchForm';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<HomePageSearchForm
				dispatch={() => {}} // eslint-disable-line
			/>
		);
	});

	describe( 'HomePageSearchForm', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
