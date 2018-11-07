import React from 'react';
import Main from '../main';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Main />
		);
	});

	describe( 'Main', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
