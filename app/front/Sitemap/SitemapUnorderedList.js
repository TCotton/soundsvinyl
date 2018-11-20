import React, { Component } from 'react';
import './sitemap.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SitemapUnorderedList extends Component {

	static propTypes = {
		categories: PropTypes.bool,
		// data: PropTypes.arrayOf( PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.arrayOf( PropTypes.string, PropTypes.number ) )
		data: PropTypes.any // eslint-disable-line
	};

	static defaultProps = {
		categories: false,
		data: []
	}

	constructor ( props ) {
		super( props );
	}

	render () {
		const { categories, data } = this.props;

		return (
			<React.Fragment>
				<ul styleName='sitemapUnorderedList'>
					{!categories && data.map( data => {
						return (
							<Link
								key={data._id}
								styleName='sitemapItem'
								to={`/${data.slug}/${data._id}`}
							>
								<li>
									{data.title}
								</li>
							</Link>
						)
					} )}

					{categories && data.map( ( newData, index ) => {
						const uri = 'category/' + encodeURIComponent(data[index][0]);
						return (
							<Link
								key={index.toString()}
								styleName='sitemapItem'
								to={uri}
							>
								<li>
									{data[index][0]}
								</li>
							</Link>
						)
					} )}
				</ul>
			</React.Fragment>
		)
	}
}
