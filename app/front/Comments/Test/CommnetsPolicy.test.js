import React from 'react';
import CommentsPolicy from '../CommentsPolicy';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<CommentsPolicy />
		);
	});

	describe( 'CommentsPolicy', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
