import { requestPosts, getDataFindAll, getDataFindByTag } from '../index';
import {
	GET_REQUEST_CALL_FIND_BY_TAG,
	GET_REQUEST_CALL_FIND_ALL
} from '../../constants/index';
import { homeURI } from '../../../helper_constants';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
jest.unmock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('Testing getDataFindAll()', () => {
	beforeEach(() => {
		store.clearActions();
	});
	it('should get findAll', () => {
		mock.onGet(`${homeURI}/apiV1/page/findAll`).reply(200, {
			data: [{ id: 1, name: 'John Smith' }]
		});

		return store.dispatch(getDataFindAll()).then(() => {
			let expectedActions = [
				{
					type: GET_REQUEST_CALL_FIND_ALL,
					payload: {
						data: [{ id: 1, name: 'John Smith' }]
					}
				}
			];
			expect(store.getActions()).toEqual([requestPosts(), expectedActions[0]]);
		});
	});

	it('should get findAll error', () => {
		mock.onGet(`${homeURI}/apiV1/page/findAll`).networkError();

		return store.dispatch(getDataFindAll()).catch(e => expect(e).toMatch('Network Error'));
	});
});

describe('Testing getDataFindByTag()', () => {
	beforeEach(() => {
		store.clearActions();
	});
	it('should get findbytag', () => {
		mock.onGet(`${homeURI}/apiV1/page/findbytag/blues`).reply(200, {
			data: [{ id: 1, name: 'John Smith' }]
		});

		return store.dispatch(getDataFindByTag('blues')).then(() => {
			let expectedActions = [
				{
					type: GET_REQUEST_CALL_FIND_BY_TAG,
					payload: {
						data: [{ id: 1, name: 'John Smith' }]
					}
				}
			];
			expect(store.getActions()).toEqual([requestPosts(), expectedActions[0]]);		});
	});
	it('should get findbytag error', () => {
		mock.onGet(`${homeURI}/apiV1/page/findbytag/blues`).networkError();

		return store.dispatch(getDataFindAll()).catch(e => expect(e).toMatch('Network Error'));
	});
});
