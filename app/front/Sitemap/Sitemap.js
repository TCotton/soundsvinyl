import React, { Component } from 'react';
import './sitemap.scss';
import axios from 'axios'
import { homeURI } from '../../helper_constants'
import SitemapUnorderedList from './SitemapUnorderedList';
import ErrorBoundary from '../errorBoundaries/ErrorBoundary';
import _ from 'lodash';

export default class Sitemap extends Component {

	constructor ( props ) {
		super( props );

		this.state = {
			customPages: [],
			error: null,
			pages: []
		};
	}

	componentWillMount () {
		axios.get( `${homeURI}/apiV1/page/getall` )
			.then( res => {

				if( res.data.error ) {
					this.setState( {
						error: res.data.error
					} );
				}

				this.setState( {
					pages: res.data,
				} )
			} );

		axios.get( `${homeURI}/apiV1/page/getTags` )
			.then( res => {

				if( res.data.error ) {
					this.setState( {
						error: res.data.error
					} );
				}

				let anArray = []

				res.data.forEach((element) => {
					anArray.push(element._id.name);
				});

				const group = _.groupBy(anArray);
				const pairs = _.sortBy(group);

				this.setState( {
					customPages: pairs,
				} )
			} );
	}

	render () {
		const { error, pages, customPages } = this.state;

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
					<React.Fragment>
						<h4>
							{'Categories'}
						</h4>
					</React.Fragment>
					}
					{!error &&
					<ErrorBoundary>
						<SitemapUnorderedList
							categories
							data={customPages}
						/>
					</ErrorBoundary>
					}
					{!error &&
					<React.Fragment>
						<h4>
							{'Tracks'}
						</h4>
					</React.Fragment>
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
