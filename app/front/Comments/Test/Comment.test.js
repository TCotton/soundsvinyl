import React from 'react';
import Comment from '../Comment';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Comment
				content={[]}
			/>
		);
	});

	describe( 'Comment', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
