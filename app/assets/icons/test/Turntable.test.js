import React from 'react';
import Turntable from '../Turntable';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Turntable />
		);
	});

	describe( 'Turntable', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
