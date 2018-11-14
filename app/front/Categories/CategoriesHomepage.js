import React, { Component } from 'react';
import './categoriesHomepage.scss';
import PageUnit from '../components/pageUnit';
import HomePageSearchForm from './HomePageSearchForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class CategoriesHomepage extends Component {

	static propTypes = {
		requested: PropTypes.bool,
		search: PropTypes.arrayOf( PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.arrayOf( PropTypes.string, PropTypes.number ) ).isRequired
	}

	static defaultProps = {
		requested: true
	}

	constructor (props) {
		super(props);
		this.handleSearchResult = this.handleSearchResult.bind( this );
	}

	handleSearchResult () {
		return true;
	}

	render () {
		const { search, requested } = this.props;
		let arrayMap;

		if (requested) {

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
					{arrayMap}
				</section>
			</main>
		)
	}
}

const mapStateToProps = ( state ) => {
	if( state.search.length > 0 ) {
		return {
			search: state.search
		}
	}
}

export default connect(mapStateToProps)( CategoriesHomepage );
