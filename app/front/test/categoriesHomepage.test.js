import React from 'react';
import CategoriesHomepage from '../categoriesHomepage';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<CategoriesHomepage />
		);
	});

	describe( 'CategoriesHomepage', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
