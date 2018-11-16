import React, { Component } from 'react';
import axios from 'axios';
import { homeURI } from '../../helper_constants';
import CategoriesHomepage from './CategoriesHomepage';
import ErrorBoundary from '../errorBoundaries/ErrorBoundary';

export class Home extends Component {

	constructor (props) {
		super(props);

		this.state = {
			pages: [],
			requestCompleted: false
		};
	}

	componentDidMount () {

		axios.get( `${homeURI}/apiV1/page/get` )
			.then( res => {

				this.setState({
					pages: res.data,
					requestCompleted: true
				})
			});
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

export default Home;
