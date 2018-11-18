import React from 'react';
import Pagination from '../Pagination';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Pagination />
		);
	});

	describe( 'Pagination', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
