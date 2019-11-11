import React, { Component } from 'react'
import axios from 'axios'
import { homeURI } from '../../helper_constants'
import CategoriesHomepage from './CategoriesHomepage'
import ErrorBoundary from '../errorBoundaries/ErrorBoundary'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { getDataFindAll } from "../actions/";
import { connect } from "react-redux";

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

	componentDidUpdate (prevProps) {
		const {
			match: {
				params: { tag }
			}
		} = this.props

		if (tag !== prevProps.match.params.tag) {
			this.getRequestCall()
		}
	}

	getRequestCall () {
		const { category } = this.props;

		// refactor both these API request into one request
		if (!category) {
			const { getDataFindAll } = this.props;
			getDataFindAll();
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

	addNumberToDataArray ([...data]) {
		data.forEach((currentValue, index) => {
			data[Number.parseInt(index)].position = Number.parseInt(index) + 1
		})

		return data;
	}

	render () {
		const { category, docs, loading } = this.props;

		return (
			<ErrorBoundary>
				<CategoriesHomepage
					category={category}
					loading={loading}
					search={docs}
				/>
			</ErrorBoundary>
		)
	}
}

function mapStateToProps(state) {
  return {
		docs: state.docs,
		loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
	return({
		getDataFindAll: () => {dispatch(getDataFindAll())}
	})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Categories));
