import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FooterListElement from './FooterListElement'
import './footer.scss'

export default class FooterUnorderedList extends Component {
	render () {
		return (
			<ul>
				<Link
					aria-label='Comments Policy'
					to='/comments-policy'
				>
					<FooterListElement
						text='Comments Policy'
					/>
				</Link>
				<Link
					aria-label='Sitemap'
					to='/sitemap'
				>
					<FooterListElement
						text='Sitemap'
					/>
				</Link>
				<a
					aria-label='License'
					href='https://creativecommons.org/licenses/by-nc/4.0/'
					rel='noreferrer'
				>
					<FooterListElement text='Code (CC BY-NC 4.0 license)' />
				</a>
			</ul>
		)
	}
}
