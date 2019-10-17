import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { searchTextReducer } from '../reducers/reducers'

const reducer = combineReducers({
	search: searchTextReducer
})

export const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtenion ? window.devToolsExtenion : f => f
	)
)

export default store
