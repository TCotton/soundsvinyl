import React, { Component } from 'react';
import axios from 'axios';
import { homeURI } from '../../helper_constants';
import CategoriesHomepage from './CategoriesHomepage';
import ErrorBoundary from '../errorBoundaries/ErrorBoundary';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const articlesPerPage = 10;

export class Categories extends Component {

	static propTypes = {
		category: PropTypes.string,
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string
			})
		})
	};

	static defaultProps = {
		category: undefined,
		match: {
			params: {
				id: ''
			}
		}
	}

	constructor ( props ) {
		super( props );
		this.state = this.getInitialState();
	}

	getInitialState () {
		return {
			current: 1,
			error: false,
			loading: false,
			dataArray: [],
			page: [],
			requestCompleted: false,
			total: 20
		};
	}

	componentDidMount () {
		this.getRequestCall();
	}

	componentDidUpdate( prevProps ) {
		const { match: { params: { tag } } } = this.props;

		if (tag !== prevProps.match.params.tag) {
			this.getRequestCall();
		}
	}

	getRequestCall() {

		const { category } = this.props;

		const page = 1;
		const perPage = 11;

		// refactor both these API request into one request
		if( !category ) {
			axios.get( `${homeURI}/apiV1/page/get?page=${page}&perPage=${perPage}` )
				.then( res => {

					// page, perPage

					console.dir(res.data);

					this.setState( {
						pages: res.data.docs,
						requestCompleted: true,
						total: res.data.length
					})
				}).catch((error) => {
				new Error(error.toString())
			});
		}

		if( category ) {
			axios.get( `${homeURI}/apiV1/page/findbytag/${category}` )
				.then( res => {

					this.setState( {
						pages: this.addNumberToDataArray(res.data),
						requestCompleted: true,
						total: res.data.length
					})
				}).catch((error) => {
				new Error(error.toString())
			});
		}

	}

	handleOnChange ( direction ) {
		const { current, total } = this.state;
		const maximum = Math.ceil( total / articlesPerPage );

		const paginationFunc = ( current ) => {
			if ( direction === 'left' ) {
				// current should be a minimum of one
				return ( current - 1 >= 1 ) ? ( current - 1 ) : 1;
			}
			if ( direction === 'right' ) {
				// current should be maximum of Math.ceil(total / articlesPerPage)
				return ( current + 1 < maximum ) ? ( current + 1 ) : maximum;
			}
		};

		this.setState({ current: paginationFunc( current ) });
	}

	addNumberToDataArray ([ ...data ]) {
		data.forEach( ( currentValue, index ) => {
			data[ index ].position = ( index + 1 );
		});

		return data;
	}

	render () {
		const {
			pages,
			requestCompleted
		} = this.state;

		const { category } = this.props; // refactor -> use redux

		return (
			<ErrorBoundary>
				<CategoriesHomepage
					category={category}
					requestCompleted={requestCompleted}
					search={pages}
				/>
			</ErrorBoundary>
		)
	}
}

export default withRouter(Categories);
