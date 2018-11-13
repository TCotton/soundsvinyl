import React from 'react';
import Disqus from '../Disqus';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		const article = {
			url: 'http://example.co',
			id: 'asdfsdfasdfasdfasd',
			title: 'this is a title here'
		};

		component = renderer.create(
			<Disqus article={article} />
		);
	});

	describe( 'Disqus', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
