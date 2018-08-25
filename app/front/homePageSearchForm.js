import React from 'react';
import './homePageSearchForm.scss';

class HomePageSearchForm extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			search: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit (e) {
		e.preventDefault();
	}

	handleInputChange (event) {

		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

	}

	render () {

		return (
			<div styleName='search'>
				<h4>Search by category</h4>
				<form styleName='searchForm' onSubmit={this.handleSubmit}>
					<label htmlFor='search' className='visuallyhidden'>Your search term</label>
					<input type='text' id='search' name='search' value={this.state.search} onChange={this.handleInputChange} disabled />
				</form>
				<div styleName='searchName'>
					<span>&nbsp;</span>
				</div>
			</div>
		)
	}
}

export default HomePageSearchForm;

