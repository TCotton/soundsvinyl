/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { CategoriesList } from '../CategoriesList';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<CategoriesList />
		);
	});

	describe( 'CategoriesList', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
