import React from 'react';
import AboutUs from '../about';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<AboutUs />
		);
	});

	describe( 'AboutUs', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
