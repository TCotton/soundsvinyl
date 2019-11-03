import React from 'react'
import Categories from '../Categories'
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import '../../../../enzymeConfig';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('Component', () => {
	let component;
	beforeEach(() => {

		const mockStore = configureMockStore();
		const store = mockStore({});

		component = renderer.create(
			<Provider store={store}>
				<Router>
					<Categories tag='blues' />
				</Router>
			</Provider>
			)
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})
})
