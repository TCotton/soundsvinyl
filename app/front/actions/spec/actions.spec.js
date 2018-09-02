import { setSearchText } from '../actions';

describe('Action generator', () => {

	let action;

	const result = {
		setSearchText: {
			type: 'SET_SEARCH_TEXT',
			value: 'A search term'
		}
	}

	describe('setSearchText', () => {

		beforeEach(() => {
			action = setSearchText(result.setSearchText.value);
		});

		it('should be defined', () => {
			expect(action).toBeDefined();
		});

		it(`has a have same value as ${result.setSearchText.value}`, () => {
			expect(action.searchTerm).toEqual(result.setSearchText.value);
		});
	});
});
