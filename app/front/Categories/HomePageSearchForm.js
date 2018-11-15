import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePageSearchForm.scss';
import axios from 'axios';
import { homeURI } from '../../helper_constants'
import { connect } from 'react-redux';

class HomePageSearchForm extends Component {

	static propTypes = { dispatch: PropTypes.func.isRequired }

	constructor ( props ) {
		super( props );

		this.state = {
			error: null,
			message: false,
			search: '',
		};

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	handleSubmit ( event ) {
		event.preventDefault();
		const { search, message } = this.state;
		const { dispatch } = this.props;

		this.setState( {
			message: false
		} );

		axios.post( `${homeURI}/apiV1/page/findbytag`, { search } )
			.then( res => {

				if( res.data.error ) {
					this.setState( { error: res.data.error } );
				}

				if( Array.isArray( res.data ) && res.data.length === 0 ) {
					this.setState( {
						message: !message
					});
				}

				if( Array.isArray( res.data ) && res.data.length > 0 ) {
					dispatch({ type: 'SET_PAGES', payload: res.data || [] });
				}

			}).catch( ( e ) => {
			this.setState( { error: e.toString() } );
		})

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
		const { search, error, message } = this.state;

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
				<div styleName='searchName'>
					{error}
					{message &&
						<p>
							{'There are no results for that search term.'}
							<br />
							{'Try another term.'}
						</p>
					}
				</div>
			</div>
		)
	}
}

export default connect()( HomePageSearchForm );

