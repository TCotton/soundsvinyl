export const searchTextReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchTerm;
		default:
			return state;
	}
}
