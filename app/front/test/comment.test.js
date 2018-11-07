import React from 'react';
import Comment from '../comment.js';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Comment content='a string' />
		);
	});

	describe( 'Comment', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
