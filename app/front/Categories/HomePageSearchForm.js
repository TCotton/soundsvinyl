/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePageSearchForm.scss';
import { withRouter, Link } from 'react-router-dom';

export class HomePageSearchForm extends Component {

	// static propTypes = { dispatch: PropTypes.func.isRequired }

	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired
	};

	constructor ( props ) {
		super( props );

		this.state = {
			error: null,
			message: false,
			search: '',
			searchTerm: ''
		};

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	handleSubmit ( event ) {
		event.preventDefault();

		if( event.target.elements[ 0 ] && event.target.elements[ 0 ].value && event.target.elements[ 0 ].value.length > 0 ) {
			const pathname = `/tags/${event.target.elements[0].value}`;
			// redirect must happen here
			// return <Link to={pathname}>;
		}
	}

	handleInputChange ( event ) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState( {
			[ name ]: value
		} );

	}

	render () {
		const { search } = this.state;

		return (
			<div styleName='search'>
				<h4>
					{'Search by category'}
				</h4>
				<form
					onSubmit={this.handleSubmit}
					styleName='searchForm'
				>
					<label
						className='visuallyhidden'
						htmlFor='search'
					>
						{'Your search term'}
					</label>
					<input
						id='search'
						name='search'
						onChange={this.handleInputChange}
						type='text'
						value={search}
					/>
				</form>
			</div>
		)
	}
}

export default withRouter(HomePageSearchForm);

