import React from 'react';
import Disqus from '../Disqus';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Disqus
				id='5b72d35f43f503882567d78d'
				path='/ltj-bukem-and-tayla-bang-the-drums/5b72d35f43f503882567d78d'
				title='LTJ Bukem & Tayla ‎– Bang The Drums'
			/>
		);
	});

	describe( 'Disqus', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
