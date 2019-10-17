import React from 'react'
import SitemapUnorderedList from '../SitemapUnorderedList'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component

	const dataOne = [
		{
			_id: '5b7d2fb9765dfc1490e1e525',
			title: 'Machine - There But For The Grace Of God Go I',
			subTitle:
				'DJ Colourzone edit, single originally released on RCA Victor Records in 1979',
			slug: 'machine-there-but-for-the-grace-of-god-go-i',
			shortSlug: '5679bf2d7b5',
			videoLink:
				'https://12b545e1fe8bb4e8bc08-3c9a18427a9da660b02129e57660202c.ssl.cf3.rackcdn.com/machine-there-but-for-the-grace-of-god-go-I.mp4',
			categories: [
				{
					date: '2018-08-27T12:48:27.361Z',
					_id: '5b83f31be4a2f8d025199f8f',
					name: 'disco'
				},
				{
					date: '2018-08-27T12:48:27.361Z',
					_id: '5b83f31be4a2f8d025199f8e',
					name: "r'n'b"
				},
				{
					date: '2018-08-27T12:48:27.361Z',
					_id: '5b83f31be4a2f8d025199f8d',
					name: 'r and b'
				}
			],
			descriptionOne:
				"According to the Wikipedia entry, Machine 'was an American funk disco group, formed by Jay Stovall in 1977. The band started in New York City with the intent to create the disco equivalent of R&B message songs'.",
			descriptionTwo:
				'The lyrics caused some controversy as they included the line "Let\'s find a place they say, somewhere far away, with no blacks, no jews and no gays" but this wasn’t a manifesto, but the storytelling of a working class New York family moving out into new potential suburban opportunities, with disastrous consequences.',
			descriptionThree:
				'This song was listed in the The Pitchfork 500. And rightly so. It’s a storming single, which, this version by DJ Colourzone sharpens.',
			userId: '4edd40c86762e0fb12000003',
			date: '2018-08-22T09:41:13.163Z',
			updated: '2018-08-27T12:48:27.360Z',
			__v: 0
		}
	]

	const dataTwo = [
		{
			_id: '5b72d35f43f503882567d78d',
			title: 'LTJ Bukem & Tayla ‎– Bang The Drums',
			subTitle: 'Good Looking Records, 1993',
			slug: 'ltj-bukem-and-tayla-bang-the-drums',
			shortSlug: 'f34f53d27b5',
			videoLink:
				'https://12b545e1fe8bb4e8bc08-3c9a18427a9da660b02129e57660202c.ssl.cf3.rackcdn.com/ltj-bukem-bang-the-drums.mp4',
			categories: [
				{
					date: '2018-08-27T12:53:40.722Z',
					_id: '5b83f454e4a2f8d025199f93',
					name: "dru'n'bass"
				},
				{
					date: '2018-08-27T12:53:40.722Z',
					_id: '5b83f454e4a2f8d025199f92',
					name: 'drum and bass'
				},
				{
					date: '2018-08-27T12:53:40.722Z',
					_id: '5b83f454e4a2f8d025199f91',
					name: "d'n'b"
				},
				{
					date: '2018-08-27T12:53:40.722Z',
					_id: '5b83f454e4a2f8d025199f90',
					name: 'd&b'
				}
			],
			descriptionOne:
				'Originally released in 1992, this is LTJ Bukem as you have never heard him before.',
			descriptionTwo:
				'Bukem was later to be the leading producer in the world’s most ridiculously named music genre, ‘intelligent drum’n’bass’ (as opposed to ‘moronic Jungle’?).',
			descriptionThree:
				'With Bang the Drums, he successfully captures the intensity of rave as it transmogrified, in the early 1990s, from the 4/4 house music-influenced beats to breakbeat; applying mutated jazz, funk and R’n’B rhythm samples.',
			userId: '4edd40c86762e0fb12000003',
			date: '2018-08-14T13:04:31.800Z',
			updated: '2018-08-27T12:53:40.721Z',
			__v: 0
		}
	]

	beforeEach(() => {
		component = renderer.create(
			<Router>
				<SitemapUnorderedList data={dataOne} />
			</Router>
		)
	})

	describe('H1Element', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<Router>
					<SitemapUnorderedList data={dataTwo} />
				</Router>
			)
			expect(component).toBeDefined()
		})
	})
})
