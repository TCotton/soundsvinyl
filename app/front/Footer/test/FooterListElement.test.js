import React from 'react';
import FooterListElement from '../FooterListElement';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe( 'Component', () => {
	let component;
	beforeEach( () => {
		component = renderer.create(
			<Router>
				<FooterListElement
					text='Current top 30 vinyl singles chart'
				/>
			</Router>
		);
	});

	describe( 'FooterListElement', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined();
		});

		it( 'can be updated', () => {
			component.update(
				<Router>
					<FooterListElement
						text='This is different link text'
					/>
				</Router>
			);

			expect( component ).toBeDefined();
		});
	});
});
