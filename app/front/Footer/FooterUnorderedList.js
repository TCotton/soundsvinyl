import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterListElement from './FooterListElement';
import './footer.scss';

export default class FooterUnorderedList extends Component {

	render () {
		return (
			<ul>
				<Link to='/vinyl-singles-top-30-chart'>
					<FooterListElement
						text='Current top 30 vinyl singles chart'
					/>
				</Link>
				<Link to='/sitemap'>
					<FooterListElement
						text='Sitemap'
					/>
				</Link>
				<a
					href='https://github.com/TCotton/soundsvinyl'
					rel='noreferrer'
				>
					<FooterListElement
						text='Code (CC BY-NC 4.0 license)'
					/>
				</a>
			</ul>
		)
	}
}
