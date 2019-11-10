import React, { Component } from 'react'
import axios from 'axios'
import { homeURI } from '../../helper_constants'
import CategoriesHomepage from './CategoriesHomepage'
import ErrorBoundary from '../errorBoundaries/ErrorBoundary'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

export class Categories extends Component {
	static propTypes = {
		category: PropTypes.string,
		history: PropTypes.shape({
			push: PropTypes.func
		}),
		location: PropTypes.shape({
				pathname: PropTypes.string,
				search: PropTypes.string
		}),
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string,
				tag: PropTypes.string
			})
		}),
	}

	static defaultProps = {
		category: undefined,
		history: {
			push: () => {},
		},
		location: {
			params: {
				pathname: '',
				search: ''
			}
		},
		match: {
			params: {
				id: ''
			}
		}
	}

	constructor (props) {
		super(props)
		this.state = this.getInitialState();
	}

	getInitialState () {

		return {
			error: false,
			loading: false,
			docs: [],
			requestCompleted: false,
		}
	}

	componentDidMount () {
		this.getRequestCall()
	}

	componentDidUpdate (prevProps, prevState) {
		const {
			match: {
				params: { tag }
			}
		} = this.props

		if (tag !== prevProps.match.params.tag) {
			this.getRequestCall()
		}

		let x = 0;
		let y = 0;

		Object.entries(this.props).forEach(([key, val]) =>
    	prevProps[key] !== val && console.log(`Prop '${key}' changed %s`, x++)
  	);
  	if (this.state) {
   	 Object.entries(this.state).forEach(([key, val]) =>
      prevState[key] !== val && console.log(`State '${key}' changed %s`, y++)
    );
  }
	}

	getRequestCall () {
		const { category } = this.props;

		// refactor both these API request into one request
		if (!category) {
			axios
				.get(
					`${homeURI}/apiV1/page/findAll`
				)
				.then(res => {
					this.setState({
						docs: res.data,
						requestCompleted: true
					})
				})
				.catch(error => {
					new Error(error.toString())
				})
		}

		if (category) {
			axios
				.get(`${homeURI}/apiV1/page/findbytag/${category}`)
				.then(res => {
					this.setState({
						docs: this.addNumberToDataArray(res.data),
						requestCompleted: true,
					})
				})
				.catch(error => {
					new Error(error.toString())
				})
		}
	}

/* 	handleOnChange (direction) {
		const paginationFunc = () => {
			const { page, total } = this.state;
			const maximum = Math.ceil(total / articlesPerPage);

			if (direction === 'left') {
				// current should be a minimum of one
				return page - 1 >= 1 ? page - 1 : 1;
			}
			if (direction === 'right') {
				// current should be maximum of Math.ceil(total / articlesPerPage)
				return page + 1 < maximum ? page + 1 : maximum;
			}
		}

		this.setState(
			{
				page: paginationFunc()
			},
			() => {
				return this.getRequestCall()
			}
		)
	} */

	addNumberToDataArray ([...data]) {
		data.forEach((currentValue, index) => {
			data[Number.parseInt(index)].position = Number.parseInt(index) + 1
		})

		return data;
	}

	render () {
		const { docs, requestCompleted } = this.state;
		console.dir(this.state);

		const { category } = this.props; // refactor -> use redux

		return (
			<ErrorBoundary>
				<CategoriesHomepage
					category={category}
					requestCompleted={requestCompleted}
					search={docs}
				/>
			</ErrorBoundary>
		)
	}
}

export default withRouter(Categories);
