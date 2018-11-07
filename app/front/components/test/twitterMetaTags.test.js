import React from 'react';
import TwitterMetaTags from '../twitterMetaTags';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;

	beforeEach( () => {
		component = renderer.create(
			<TwitterMetaTags
				description='This is a description'
				title='This is a title'
			/>
		);
	} );

	describe( 'TwitterMetaTags', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
