import React, { Component } from 'react'
import './CategoriesHomepage.scss'
import PageUnit from '../Page/PageUnit'
import HomePageSearchForm from './HomePageSearchForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import shallowCompare from 'react-addons-shallow-compare';

export class CategoriesHomepage extends Component {
	static propTypes = {
		requestCompleted: PropTypes.bool,
		search: PropTypes.arrayOf(
			PropTypes.object,
			PropTypes.string,
			PropTypes.number,
			PropTypes.arrayOf(PropTypes.string, PropTypes.number)
		)
	}

	static defaultProps = {
		requestCompleted: false,
		search: null
	}

	constructor (props) {
		super(props)
		this.handleSearchResult = this.handleSearchResult.bind(this)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	handleSearchResult () {
		return true
	}

	render () {
		let { search, requestCompleted } = this.props;
		let arrayMap;

		if (requestCompleted && Array.isArray(search) && search.length > 0) {
			search.splice(2, 0, '') // add empty element so that search form can be placed there

			arrayMap = search.map((element, index) => {
				Object.assign(element, {
					thumbnailUrl:
						window.location.protocol +
						'//' +
						window.location.hostname +
						(window.location.port.length === 0 ? '/' : ':8443/') +
						`thumbnails/thumbnail-${element._id}.png`
				})

				const key = index.toString();

				// only add search box on home page
				return (
					<div
						key={`${element}${key}`}
					>
						{index !== 2 ? (
							<PageUnit
								id={element._id}
								shortSlug={element.shortSlug}
								slug={element.slug}
								subtitle={element.subTitle}
								thumbnailUrl={element.thumbnailUrl}
								title={element.title}
							/>
						) : (
							<HomePageSearchForm onSearchInput={this.handleSearchResult} />
						)}
					</div>
				)
			})
		}

		const $thereAreNo = 'There are no entries for this term'

		if (requestCompleted && Array.isArray(search) && search.length === 0) {
			arrayMap = <p className='error'>{$thereAreNo}</p> // eslint-disable-line react/jsx-one-expression-per-line
		}

		const href = window.location.href
		const $title =
			href.indexOf('/category/') === -1
				? 'All categories'
				: href.substr(href.lastIndexOf('/') + 1)

		return (
			<main styleName='categories'>
				<h3>
					{$title}
				</h3>
				<section>
					{arrayMap}
				</section>
			</main>
		)
	}
}

export default connect()(withRouter(CategoriesHomepage))
