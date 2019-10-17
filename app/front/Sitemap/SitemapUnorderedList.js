/* eslint-disable security/detect-object-injection */
import React, { Component } from 'react'
import './sitemap.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class SitemapUnorderedList extends Component {
	static propTypes = {
		categories: PropTypes.bool,
		data: PropTypes.arrayOf(
			PropTypes.object,
			PropTypes.string,
			PropTypes.number,
			PropTypes.node,
			PropTypes.element,
			PropTypes.arrayOf(PropTypes.string, PropTypes.number)
		)
	}

	static defaultProps = {
		categories: false,
		data: []
	}

	constructor (props) {
		super(props)
	}

	render () {
		const { categories, data } = this.props

		return (
			<ul styleName='sitemapUnorderedList'>
				{!categories &&
					data.map(data => {
						return (
							<li key={data._id}>
								<Link styleName='sitemapItem' to={`/${data.slug}/${data._id}`}>
									{data.title}
								</Link>
							</li>
						)
					})}

				{categories &&
					data.map((newData, index) => {
						const uri = 'category/' + encodeURIComponent(data[index][0])
						return (
							<li key={index.toString()}>
								<Link styleName='sitemapItem' to={uri}>
									{data[index][0]}
								</Link>
							</li>
						)
					})}
			</ul>
		)
	}
}
