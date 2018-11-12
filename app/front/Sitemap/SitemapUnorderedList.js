import React, { Component } from 'react';
import './sitemap.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SitemapUnorderedList extends Component {

	static propTypes = {
		data: PropTypes.arrayOf( PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.arrayOf( PropTypes.string, PropTypes.number ) )
	};

	static defaultProps = {
		data: []
	}

	constructor ( props ) {
		super( props );
	}

	render () {
		const { data } = this.props;

		return (
			<React.Fragment>
				<ul styleName='sitemapUnorderedList'>
					{data.map( data => {
						return (
							<Link
								key={data.title}
								styleName='sitemapItem'
								to={`/${data.slug}/${data._id}`}
							>
								<li>
									{data.title}
								</li>
							</Link>
						)
					} )}
				</ul>
			</React.Fragment>
		)
	}
}
