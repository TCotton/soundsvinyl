import React from 'react';
import RecordListing from '../recordListing.js';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Router>
				<RecordListing />
			</Router>
		);
	});

	describe( 'RecordListing', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
