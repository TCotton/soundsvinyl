export const searchTextReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_PAGES':
			state = Object.assign(state, action.payload);
			break;
		default:
			return state;
	}

	console.dir(state);

	return state;
}
