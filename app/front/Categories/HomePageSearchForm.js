import React, { Component } from 'react';
import './HomePageSearchForm.scss';
import { connect } from 'react-redux';
import RedirectComp from './RedirectComp';
import { withRouter } from 'react-router-dom'

export class HomePageSearchForm extends Component {

	constructor ( props ) {
		super( props );

		this.state = {
			error: null,
			message: false,
			search: '',
			redirectRoute: false
		};

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	handleSubmit ( event ) {
		event.preventDefault();
		const { search } = this.state;

		this.setState( {
			redirectRoute: `/category/${search}`
		} );
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
		const { search, error, message, redirectRoute } = this.state;

		return (
			<React.Fragment>
				<RedirectComp
					search={redirectRoute}
				/>
				<div styleName='search'>
					<h4>
						Search by category
					</h4>
					<form
						onSubmit={this.handleSubmit}
						styleName='searchForm'
					>
						<label
							className='visuallyhidden'
							htmlFor='search'
						>
							Your search term
						</label>
						<input
							data-autocapitalize='none'
							id='search'
							name='search'
							onChange={this.handleInputChange}
							type='search'
							value={search}
						/>
					</form>
					<div styleName='searchName'>
						{error}
						{message &&
						<p>
							There are no results for that search term.
							<br />
							Try another term.
						</p>}
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default connect()( withRouter( HomePageSearchForm ) );

