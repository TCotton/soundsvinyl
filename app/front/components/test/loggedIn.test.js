import React from 'react';
import LoginButton from '../loggedIn';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Router>
				<LoginButton
					onClick={() => {}} // eslint-disable-line
				/>
			</Router>
		);
	});

	describe( 'LoginButton', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});
	});
});
