import { createStore } from 'redux';

function store ( state = {
	pages: []
}, action ) {
	switch( action.type ) {
		case '':
			return Object.assign( {}, state, {
				sections: action.payload.map( section => {
					return Object.assign( {}, section );
				})
			});
		default:
			return state;
	}
}

let navigationStore = createStore(
	store,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default navigationStore;
/*
const reducer = combineReducers({
	search: searchTextReducer,
});

export const store = createStore(
		reducer,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtenion ? window.devToolsExtenion : f => f
		));*/
