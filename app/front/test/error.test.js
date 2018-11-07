import React from 'react';
import Error from '../error';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Error />
		);
	});

	describe( 'Error', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
