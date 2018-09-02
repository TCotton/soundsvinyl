import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from '../reducers/reducers';

export const configure = () => {

	const reducer = combineReducers({
		name: searchReducer,
	});

	const store = createStore(
		reducer,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtenion ? window.devToolsExtenion : f => f
		));

	return store;
}
