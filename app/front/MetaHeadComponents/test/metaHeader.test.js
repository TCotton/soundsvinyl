import React from 'react';
import MetaHeader from '../metaHeader';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<MetaHeader title='This is a title' />
		);
	});

	describe( 'MetaHeader', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
