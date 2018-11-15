import React from 'react';
import PageUnit from '../PageUnit';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe( 'Component', () => {
	let component;

	beforeEach( () => {
		component = renderer.create(
			<Router>
				<PageUnit
					id='507f191e810c19729de860ea'
					slug='this-is-a-slug'
					subtitle='This is a subtitle'
					thumbnailUrl='https://thumbnailurl.com'
					title='This is a title'
				/>
			</Router>
		);
	});

	describe( 'PageUnit', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
