import React, { Component } from 'react'
import CategoriesHomepage from './CategoriesHomepage'
import ErrorBoundary from '../errorBoundaries/ErrorBoundary'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { getDataFindAll, getDataFindByTag } from "../actions/";
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

		if (!category) {
			const { getDataFindAll } = this.props;
			getDataFindAll();
		}

		if (category) {
			const { getDataFindByTag } = this.props;
			getDataFindByTag(category);
		}

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

// function mapDispatchToProps(dispatch) {
	// return({
	//	getDataFindAll: () => {dispatch(getDataFindAll())},
	//	getDataFindByTag: () => {dispatch(getDataFindByTag())}
	//})
// }

export default connect(
  mapStateToProps,
  {getDataFindAll, getDataFindByTag}
)(withRouter(Categories));
