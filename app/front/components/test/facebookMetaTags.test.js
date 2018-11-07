import React from 'react';
import FacebookMetaTags from '../facebookMetaTags';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<FacebookMetaTags
				canonical='http://www.path.com'
				faceBookDescription='A facebook description'
				faceBookTitle='a facebook title'
			/>
		);
	});

	describe( 'FacebookMetaTags', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
