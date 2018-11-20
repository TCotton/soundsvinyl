/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageUnit from '../Page/PageUnit'
import HomePageSearchForm from './HomePageSearchForm'

// import ErrorBoundary from '../errorBoundaries/ErrorBoundary';

export class CategoriesList extends Component {

	static propTypes = {
		current: PropTypes.number.isRequired,
		dataArray: PropTypes.arrayOf(
			PropTypes.oneOfType( [
				PropTypes.string,
				PropTypes.number,
				PropTypes.object
			] )
		).isRequired,
		pageSize: PropTypes.number.isRequired
	};

	constructor ( props ) {
		super( props );
	}

	render () {

		const { pageSize, current, dataArray } = this.props;
		const slicedArray = [ ...dataArray.slice( ( current - 1 ) * pageSize, ( pageSize * current ) ) ];
		slicedArray.splice( 2, 0, '' ); // add empty element so that search form can be placed there

		const arrayMap = slicedArray.map( ( element, index ) => {

			Object.assign( element, {
				thumbnailUrl: window.location.protocol + '//' + window.location.hostname + ( window.location.port.length === 0 ? '/' : ':8443/' ) + `thumbnails/thumbnail-${element._id}.png`
			} );

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
							/> : <HomePageSearchForm onSearchInput={this.handleSearchResult} />
					}
				</div>
			)
		});

		return (
			<React.Fragment />
		)
	}
}

export default CategoriesList;
