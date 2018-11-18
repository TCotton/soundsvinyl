import React, { Component } from 'react';
import axios from 'axios';
import { homeURI } from '../../helper_constants';
import CategoriesHomepage from './CategoriesHomepage';
import ErrorBoundary from '../errorBoundaries/ErrorBoundary';
import PropTypes from 'prop-types'

export class Categories extends Component {

	static propTypes = {
		category: PropTypes.string,
	}

	static defaultProps = {
		category: undefined
	}

	constructor ( props ) {
		super( props );

		this.state = {
			pages: [],
			requestCompleted: false
		};
	}

	componentDidMount () {

		const { category } = this.props;

		console.dir(this.props);

		// refactor
		if( !category ) {
			axios.get( `${homeURI}/apiV1/page/get` )
				.then( res => {

					this.setState( {
						pages: res.data,
						requestCompleted: true
					} )
				} );
		}

		if( category ) {
			axios.get( `${homeURI}/apiV1/page/findbytag/${category}` )
				.then( res => {

					this.setState( {
						pages: res.data,
						requestCompleted: true
					} )
				} );
		}

	}

	render () {
		const { pages, requestCompleted } = this.state;

		return (
			<ErrorBoundary>
				<CategoriesHomepage
					requestCompleted={requestCompleted}
					search={pages}
				/>
			</ErrorBoundary>
		)
	}
}

export default Categories;
