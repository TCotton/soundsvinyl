import React, { Component } from 'react';
import axios from 'axios';
import './categoriesHomepage.scss';
import { homeURI } from '../helper_constants';
import PageUnit from './components/pageUnit';
import HomePageSearchForm from './homePageSearchForm';

class CategoriesHomepage extends Component {

	constructor (props) {
		super(props);

		this.state = {
			pages: [],
			requestCompleted: false,
		};

		this.handleSearchResult = this.handleSearchResult.bind( this );
	}

	componentDidMount () {

		axios.get(`${homeURI}/apiV1/page/get`)
			.then(res => {

			/*	if (res.data.error) {
					this.setState({
						error: res.data.error
					});
				}*/

				this.setState({
					requestCompleted: true,
					pages: res.data,
				})
			});
	}

	handleSearchResult() {
		return true;
	}

	render () {

		const { requestCompleted, pages } = this.state;
		let arrayMap;

		if (requestCompleted) {
			pages.splice(2, 0, ''); // add empty element so that search form can be placed there
			arrayMap = pages.map((element, index) => {

				Object.assign(element, {
					thumbnailUrl: window.location.protocol + '//' + window.location.hostname + (window.location.port.length === 0 ? '/' : ':8443/') + `thumbnails/thumbnail-${element._id}.png`
				});

				const key = index.toString();

				return (
					<div key={`${element}${key}`}>
						{
							index !== 2 ?
								<PageUnit
									id={element._id}
									shortSlug={element.shortSlug}
									slug={element.slug}
									subtitle={element.subTitle}
									thumbnailUrl={element.thumbnailUrl}
									title={element.title}
								/> : <HomePageSearchForm onSearchInput={this.handleSearchResult}  />
						}
					</div>
				)
			});
		}

		return (
			<main styleName='categories'>
				<h3>
					{'All categories'}
				</h3>
				<section>
					{arrayMap}
				</section>
			</main>
		)
	}
}

export default CategoriesHomepage;
