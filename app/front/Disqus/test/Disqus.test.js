import React from 'react';
import Disqus from '../Disqus';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Disqus />
		);
	});

	describe( 'Disqus', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
