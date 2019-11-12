import rootReducer from '../reducers'
import {
	REQUEST_POSTS,
	GET_REQUEST_CALL_FIND_BY_TAG,
	GET_REQUEST_CALL_FIND_ALL,
 } from '../../constants/index';
import df from 'deep-freeze-strict'

describe('Reducers', () => {
	let reducer;
	let result;

	let searchText = [
		{
			_id: '5bec2f2e2edf55248450242f',
			title: 'Kool DJ Dust - Really Love You',
			subTitle: 'Healthy Edits EP, Take Away UK, 2018)',
			slug: 'kool-dj-dust-really-love-you',
			shortSlug: 'de2e2f2ceb5',
			videoLink:
				'https://04477e2a4d2b18bd4311-3c9a18427a9da660b02129e57660202c.ssl.cf3.rackcdn.com/really-love-you-kool-dj-dust.mp4',
			categories: [
				{
					date: '2018-11-14T14:20:30.314Z',
					_id: '5bec2f2e2edf552484502431',
					name: 'disco'
				}
			],
			descriptionOne:
				'There are dozens of disco edits being released every month. Most of it, I find, sits on the glossy, sick bag house spectrum and should be avoided. This track, Really Love You by Kool DJ Dust, has a baseline so bouncy it’s orgasmic.',
			descriptionTwo:
				'Kool DJ Dust, real name Daniel Savio, from Stockholm in Sweden has had a regular, if not prolific, output for over ten years.',
			descriptionThree:
				'The tracks on Healthy Edits, the EP that Really Love You opens with, are all competent disco edits, but reach further back into his back catalogue for stronger songs: Disco Dancing (2010) and Ancient Astronauts (2009) are two.',
			userId: '4edd40c86762e0fb12000003',
			date: '2018-11-14T14:20:30.310Z',
			updated: '2018-11-14T14:20:30.310Z',
			__v: 0
		}
	];

	const initialState = {
		docs: [],
		loading: true,
	};

	describe('rootReducer - fallback to initialState default', () => {

		let action = {
			type: 'NOT_FOUND'
		}

		beforeEach(() => {
			result = rootReducer(df(initialState), df(action));
		})

		it('should be defined', () => {
			expect(result).toBeDefined()
		})

		it(`should have same value as ${action.type}`, () => {
			expect(result.docs).toEqual(expect.any(Array));
			expect(result.docs.length).toEqual(0);
			expect(result.loading).toEqual(expect.any(Boolean));
		})
	})

	describe(`rootReducer - ${REQUEST_POSTS}`, () => {

		let action = {
			type: 'NOT_FOUND'
		}

		beforeEach(() => {
			result = rootReducer(df(initialState), df(action));
		})

		it('should be defined', () => {
			expect(result).toBeDefined()
		})

		it(`should have same retrn correct object for ${REQUEST_POSTS}`, () => {
			expect(result.loading).toEqual(expect.any(Boolean));
			expect(result.loading).toEqual(true);
		})
	})

	describe(`rootReducer - ${GET_REQUEST_CALL_FIND_BY_TAG}`, () => {

		let action = {
			type: GET_REQUEST_CALL_FIND_BY_TAG,
			payload: searchText
		}

		beforeEach(() => {
			result = rootReducer(df(initialState), df(action));
		})

		it('should be defined', () => {
			expect(result).toBeDefined()
		})

		it(`should have same retrn correct object for ${REQUEST_POSTS}`, () => {
			console.dir(result.docs);
			expect(result.docs).toEqual(expect.any(Array));
			expect(result.docs[0]._id).toEqual(searchText[0]._id);
			expect(result.loading).toEqual(expect.any(Boolean));
			expect(result.loading).toEqual(false);
		})
	})

	describe(`rootReducer - ${GET_REQUEST_CALL_FIND_ALL}`, () => {

		let action = {
			type: GET_REQUEST_CALL_FIND_ALL,
			payload: searchText
		}

		beforeEach(() => {
			result = rootReducer(df(initialState), df(action));
		})

		it('should be defined', () => {
			expect(result).toBeDefined()
		})

		it(`should have same retrn correct object for ${GET_REQUEST_CALL_FIND_ALL}`, () => {
			expect(result.docs).toEqual(expect.any(Array));
			expect(result.docs[0]._id).toEqual(searchText[0]._id);
			expect(result.loading).toEqual(expect.any(Boolean));
			expect(result.loading).toEqual(false);
		})
	})
})
