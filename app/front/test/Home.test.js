/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import Tags from '../Tags';
import renderer from 'react-test-renderer';

describe.skip( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Tags />
		);
	});

	describe( 'Tags', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
