export const searchTextReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_PAGES':
			return Object.assign(...state, action.payload);
		default:
			return state;
	}
}
