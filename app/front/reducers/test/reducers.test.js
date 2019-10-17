import { searchTextReducer } from '../reducers'
import df from 'deep-freeze-strict'

describe('Reducers', () => {
	let reducer

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
	]

	describe('searchTextReducer - correct switch statement', () => {
		let action = {
			payload: searchText,
			type: 'SET_PAGES'
		}

		beforeEach(() => {
			reducer = searchTextReducer(df(''), df(action))
		})

		it('should be defined', () => {
			expect(reducer).toBeDefined()
		})

		it(`should have same value as ${action.type}`, () => {
			expect(reducer).toEqual(action.payload)
			expect(reducer).toEqual(expect.any(Array))
			expect(reducer.length).toEqual(action.payload.length)
		})
	})

	describe('searchTextReducer - default switch statement', () => {
		let action = {
			payload: searchText,
			type: 'NOT_SET_PAGES_HERE'
		}

		beforeEach(() => {
			reducer = searchTextReducer(df(''), df(action))
		})

		it('should be defined', () => {
			expect(reducer).toBeDefined()
		})

		it(`should NOT have same value as ${action.type}`, () => {
			expect(reducer).not.toEqual(action.payload)
			expect(reducer).toEqual(expect.any(Array))
			expect(reducer.length).not.toEqual(action.payload.length)
		})
	})
})
