import { searchTextReducer } from '../reducers';
import df from 'deep-freeze-strict';

describe('Reducers', () => {

	let reducer;

	let action = {}

	xdescribe('searchTextReducer - correct switch statement', () => {

		beforeEach(() => {

			let action = {
				searchTerm: 'This is a search term',
				type: 'SET_SEARCH_TEXT',
			}

			reducer = searchTextReducer(df(''), df(action));
		});

		it('should be defined', () => {
			expect(reducer).toBeDefined();
		});

		it(`should have same value as ${action.searchTerm}`, () => {
			expect(reducer).toEqual(action.searchTerm);
			expect(reducer).toEqual(jasmine.any(String));
			expect(reducer.length).toEqual(action.searchTerm.length);
		});
	});

	describe('searchTextReducer - default switch statement', () => {

		beforeEach(() => {

			let action = {
				searchTerm: 'This is a search term',
				type: 'NOT_SET_SEARCH_TEXT',
			}

			reducer = searchTextReducer(df(''), df(action));
		});

		it('should be defined', () => {
			expect(reducer).toBeDefined();
		});

		it(`should have empty string as default`, () => {
			expect(reducer).toEqual('');
			expect(reducer).toEqual(jasmine.any(String));
			expect(reducer.length).toEqual(0);
		});
	});
});
