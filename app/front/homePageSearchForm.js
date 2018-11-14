import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './homePageSearchForm.scss';

class HomePageSearchForm extends Component {

	static propTypes = { onSearchInput: PropTypes.func.isRequired }

	constructor ( props ) {
		super( props );

		this.state = {
			search: '',
		};

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	handleSubmit ( event ) {
		event.preventDefault();
		const { onSearchInput } = this.props;
		const { search } = this.state;

		onSearchInput( search );
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
						disabled
						id='search'
						name='search'
						onChange={this.handleInputChange}
						type='text'
						value={search}
					/>
				</form>
				<div styleName='searchName'>
					<span />
				</div>
				<br />
			</div>
		)
	}
}

HomePageSearchForm.propTypes = { onSearchInput: PropTypes.func.isRequired };

export default HomePageSearchForm;

