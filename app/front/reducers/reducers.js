export const searchTextReducer = (state, action) => {
	state = []; // will not pass test if function uses default parameters
	switch (action.type) {
		case 'SET_PAGES':
			return Object.assign(...state, action.payload);
		default:
			return state;
	}
}

export const searchText = (state, action) => {
	state = ''; // will not pass test if function uses default parameters
	switch (action.type) {
		case 'SEARCH_TERM':
			return action.payload;
		default:
			return state;
	}
}

