import React, { Component } from 'react';
import './sitemap.scss';
import axios from 'axios'
import { homeURI } from '../../helper_constants'
import SitemapUnorderedList from './SitemapUnorderedList';
import ErrorBoundary from '../errorBoundaries/ErrorBoundary';

export default class Sitemap extends Component {

	constructor(props) {
		super(props);

		this.state = {
			error: null,
			pages: []
		};
	}

	componentWillMount() {
		axios.get(`${homeURI}/apiV1/page/getall`)
			.then(res => {

				if( res.data.error ) {
					this.setState( {
						error: res.data.error
					});
				}

				this.setState({
					pages: res.data,
				})
			});
	}

	render () {
		const { error, pages } = this.state;

		return (
			<main styleName='sitemap'>
				<h3>
					{'Sitemap'}
				</h3>
				<section>
					{error &&
						<p>
							{error}
						</p>
					}
					{!error &&
						<ErrorBoundary>
							<SitemapUnorderedList
								data={pages}
							/>
						</ErrorBoundary>
					}
				</section>
			</main>
		)
	}
}
