/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { Categories } from '../Categories';
import renderer from 'react-test-renderer';

describe.skip( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Categories />
		);
	});

	describe( 'Categories', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
