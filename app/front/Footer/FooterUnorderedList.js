import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FooterListElement from './FooterListElement'
import './footer.scss'

export default class FooterUnorderedList extends Component {
	render () {
		return (
			<ul>
				<Link to='/comments-policy'>
					<FooterListElement
						text='Comments Policy'
					/>
				</Link>
				<Link to='/sitemap'>
					<FooterListElement
						text='Sitemap'
					/>
				</Link>
				<a
					aria-label='License'
					href='https://github.com/TCotton/soundsvinyl'
					rel='noreferrer'
				>
					<FooterListElement text='Code (CC BY-NC 4.0 license)' />
				</a>
			</ul>
		)
	}
}
