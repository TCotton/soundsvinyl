import React from 'react';
import Img from '../img';
import renderer from 'react-test-renderer';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Img
				alt='This is alt text'
				className='aClassName' // eslint-disable-line
				src='http://www.disable.com'
			/>
		);
	});

	describe( 'Img', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
