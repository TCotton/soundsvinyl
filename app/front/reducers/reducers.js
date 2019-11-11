import {
	REQUEST_POSTS,
	GET_REQUEST_CALL_FIND_BY_TAG,
	GET_REQUEST_CALL_FIND_ALL,
 } from '../constants/index';

const initialState = {
	docs: [],
	loading: true,
};

function rootReducer(state = initialState, action) {

  if (action.type === GET_REQUEST_CALL_FIND_ALL && action.payload.length > 0) {
		return { ...state, docs: action.payload, loading: false };
	}

	if(action.type === REQUEST_POSTS) {
		return { ...state, loading: true };
	}

  return state;
}

export default rootReducer;
