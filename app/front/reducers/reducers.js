// import React from 'react';
/*import { combineReducers, createStore, compose } from 'redux';
import axios from 'axios';*/

export const searchReducer = (state = '', action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH':
			return action.name;
		default:
			return state;
	}
}

/*
const nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
}

let nextHobbyId = 1;

const hobbiesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobbyd
				}
			]
		case 'REMOVE_HOBBY':
			return state.filter((hobby) => hobby.id !== action.id)
		default:
			return state;
	}
}

const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch (action.type) {
		case 'STATE_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined,
			}
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url
			}
		default:
			return state;
	}
};

const startLocationFetch = () => {
	return {
		type: 'START_LOCATION'
	}
}

const completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url,
	}
}

const fetchLocation = () => {
	store.dispatch(startLocationFetch());

	axios.get('http://ipinfo.io').then((res) => {
		const loc = res.data.loc;
		const baseUrl = 'http://maps.google.com?q='

		store.dispatch(completeLocationFetch(baseUrl + loc));
	});
}

fetchLocation();

const reducer = combineReducers({
	name: nameReducer,
	hobby: hobbiesReducer,
	map: mapReducer,
});

const store = createStore(reducer, compose(
	window.devToolsExtenion ? window.devToolsExtenion : f => f
));

const unsubscribe = store.subscribe(() => {
	const state = store.getState();

	console.log('Name is ', state.name);
	document.getElementById('app').innerHTML = state.name;
	console.log('New state  ', store.getState());

	if(state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Loading...';
	} else {
		document.getElementById('app').innerHTML = '<a href="' + state.map.url  + '" target="_blank">View your location</a>';
	}
});
*/
