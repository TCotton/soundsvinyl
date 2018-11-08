import React from 'react';
import Wrapper from '../Wrapper';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Wrapper />
		);
	});

	describe( 'Wrapper', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
