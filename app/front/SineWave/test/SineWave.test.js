import React from 'react';
import SineWave from '../SineWave';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<SineWave />
		);
	});

	describe( 'SineWave', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
