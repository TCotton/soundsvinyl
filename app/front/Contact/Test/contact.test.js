import React from 'react';
import Contact from '../Contact';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Contact />
		);
	});

	describe( 'Contact', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
