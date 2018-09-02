import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchTextReducer } from '../reducers/reducers';

export const configure = () => {

	const reducer = combineReducers({
		search: searchTextReducer,
	});

	return createStore(
		reducer,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtenion ? window.devToolsExtenion : f => f
		));
}
