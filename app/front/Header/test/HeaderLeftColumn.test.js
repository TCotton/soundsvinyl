import React from 'react';
import HeaderLeftColumn from '../HeaderLeftColumn';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<HeaderLeftColumn />
		);
	});

	describe( 'HeaderLeftColumn', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
