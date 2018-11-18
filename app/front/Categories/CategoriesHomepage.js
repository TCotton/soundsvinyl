import React, { Component } from 'react';
import './categoriesHomepage.scss';
import PageUnit from '../Page/PageUnit';
import HomePageSearchForm from './HomePageSearchForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoriesList from './CategoriesList';

export class CategoriesHomepage extends Component {

	static propTypes = {
		requestCompleted: PropTypes.bool,
		search: PropTypes.arrayOf( PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.arrayOf( PropTypes.string, PropTypes.number ) ).isRequired
	}

	static defaultProps = {
		requestCompleted: false
	}

	constructor (props) {
		super(props);
		this.handleSearchResult = this.handleSearchResult.bind( this );
	}

	handleSearchResult () {
		return true;
	}

	render () {
		const { search, requestCompleted } = this.props;
		let arrayMap;

		if (requestCompleted) {
			search.splice(2, 0, ''); // add empty element so that search form can be placed there
			arrayMap = search.map((element, index) => {

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
					{requestCompleted &&
						<CategoriesList
							current='1'
							dataArray={search}
							pageSize={11}
						/>
					}
					{arrayMap}
				</section>
			</main>
		)
	}
}

const mapStateToProps = ( state ) => {
  // redux needs refactoring
	if( state.search.length > 0 ) {
		return {
			search: state.search
		}
	}
}

export default connect(mapStateToProps)( CategoriesHomepage );
