import React from 'react';
import FooterUnorderedList from '../FooterUnorderedList';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Router>
				<FooterUnorderedList />
			</Router>
		);
	});

	describe( 'FooterUnorderedList', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});

