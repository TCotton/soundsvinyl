import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './categoriesHomepage.scss';
import { homeURI } from '../helper_constants';
import PageUnit from './components/pageUnit';
import HomePageSearchForm from './homePageSearchForm';

class CategoriesHomepage extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			pages: [],
			error: null,
			requestCompleted: false,
			searchTerm: null
		};
	}

	componentDidMount () {

		axios.get(`${homeURI}/apiV1/page/get`)
			.then(res => {

				if (res.data.error) {
					this.setState({error: res.data.error});
				}

				this.setState({
					requestCompleted: true,
					pages: res.data,
				})
			});
	}

	render () {

		const requestCompleted = this.state.requestCompleted;
		let arrayMap;

		if (requestCompleted) {
			const pageList = this.state.pages;

			arrayMap = pageList.map((element, index) => {

				Object.assign(element, {
					thumbnailUrl: window.location.protocol + '//' + window.location.hostname + (window.location.port.length === 0 ? '/' : ':8443/') + `thumbnails/thumbnail-${element._id}.png`
				});

				return (
					<div key={index}>
						{
							index !== 2 ?
								<PageUnit
									title={element.title}
									subtitle={element.subTitle}
									thumbnailUrl={element.thumbnailUrl}
									slug={element.slug}
									shortSlug={element.shortSlug}
									id={element._id}/> : <HomePageSearchForm />
						}
					</div>
				)
			});
		}

		return (
			<main styleName='categories'>
				<h3>All categories</h3>
				<section>
					{arrayMap}
				</section>
			</main>
		)
	}
}

export default connect(
	(state) => {
		return {
			searchTerm: state.search
		};
	}
)(CategoriesHomepage);
