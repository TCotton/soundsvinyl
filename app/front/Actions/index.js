import axios from 'axios';
import {
	REQUEST_POSTS,
	GET_REQUEST_CALL_FIND_BY_TAG,
	GET_REQUEST_CALL_FIND_ALL,
 } from '../constants/index';
import { homeURI } from '../../helper_constants';

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export function getDataFindByTag(category) {
	return function(dispatch) {
			return axios.get(`${homeURI}/apiV1/page/findbytag/${category}`)
				.then(res => {
					dispatch({ type: GET_REQUEST_CALL_FIND_BY_TAG, payload: res });
				}).catch(error => {
					new Error(error.toString())
			})
	}
}

export function getDataFindAll() {
	return function(dispatch) {
		dispatch(requestPosts());
			return axios.get(`${homeURI}/apiV1/page/findAll`)
				.then(res => {
						dispatch({ type: GET_REQUEST_CALL_FIND_ALL, payload: res.data })
				}).catch(error => {
				new Error(error.toString())
				})
	}
}

