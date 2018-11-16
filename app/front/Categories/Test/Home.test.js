/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { Home } from '../Home';
import renderer from 'react-test-renderer';

describe.skip( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Home />
		);
	});

	describe( 'Categories', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
