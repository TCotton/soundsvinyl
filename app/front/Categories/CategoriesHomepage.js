import React, { Component } from 'react';
import './categoriesHomepage.scss';
import PageUnit from '../Page/PageUnit';
import HomePageSearchForm from './HomePageSearchForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import CategoriesList from './CategoriesList';

export class CategoriesHomepage extends Component {

	static propTypes = {
		categories: PropTypes.string, // eslint-disable-line
		requestCompleted: PropTypes.bool,
		search: PropTypes.arrayOf( PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.arrayOf( PropTypes.string, PropTypes.number ) )
	}

	static defaultProps = {
		categories: undefined,
		requestCompleted: false,
		search: null
	}

	constructor ( props ) {
		super( props );
		this.handleSearchResult = this.handleSearchResult.bind( this );
	}

	handleSearchResult () {
		return true;
	}

	render () {
		const { search, requestCompleted } = this.props;
		let arrayMap;

		if( requestCompleted && Array.isArray(search) && search.length > 0) {

			search.splice( 2, 0, '' ); // add empty element so that search form can be placed there

			arrayMap = search.map( ( element, index ) => {

				Object.assign( element, {
					thumbnailUrl: window.location.protocol + '//' + window.location.hostname + ( window.location.port.length === 0 ? '/' : ':8443/' ) + `thumbnails/thumbnail-${element._id}.png`
				} );

				const key = index.toString();

				// only add search box on home page
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
								/> : <HomePageSearchForm onSearchInput={this.handleSearchResult}/>
						}
					</div>
				)
			} );

		}

		if( requestCompleted && Array.isArray(search) && search.length === 0) {
			arrayMap = (
				<p className='error'>
					{'There are no entries for this term'}
				</p>
			);
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

const mapStateToProps = ( state ) => {
	console.dir(state);
	// redux needs refactoring
	if( state.search.length > 0 ) {
		console.log('LOG HERE!!!!');
		console.dir(state);
		return {
			search: state.search
		}
	}
}

export default connect( mapStateToProps )( CategoriesHomepage );
