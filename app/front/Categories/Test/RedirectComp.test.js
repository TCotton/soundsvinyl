import React from 'react';
import RedirectComp from '../RedirectComp';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Router>
				<RedirectComp
					search='go-to-this-page'
				/>
			</Router>
		);
	});

	describe( 'RedirectComponent', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});

		it( 'can be updated', () => {
			component.update(
				<Router>
					<RedirectComp
						search='go-to-another-page'
					/>
				</Router>
			);

			expect( component ).toBeDefined();
		});
	});
});

