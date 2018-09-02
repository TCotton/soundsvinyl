export const searchTextReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_SEARCH_TEXT':
			alert(action);
			alert(action.searchTerm);
			alert(action.type);
			return action.searchTerm;
		default:
			alert(state);
			return state;
	}
}
