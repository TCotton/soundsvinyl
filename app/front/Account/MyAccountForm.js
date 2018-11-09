import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types';

export default class MyAccountForm extends Component {

	static propTypes = {
		legend: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		nameLabel: PropTypes.string.isRequired,
		onFormSubmit: PropTypes.func.isRequired,
		onInputChange: PropTypes.func.isRequired,
		password: PropTypes.string.isRequired,
		passwordLabel: PropTypes.string.isRequired
	};

	constructor (props) {
		super(props);

		this.handleSubmitLogin = this.handleSubmitLogin.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	handleSubmitLogin(event) {
		event.preventDefault();

		const { onFormSubmit } = this.props;
		onFormSubmit();
	}

	handleInputChange(event) {
		event.preventDefault();

		const { onInputChange } = this.props;
		onInputChange(event);
	}

	render () {
		const { name, password, legend, nameLabel, passwordLabel } = this.props;

		return (

			<form onSubmit={this.handleSubmitLogin}>
				<fieldset>
					<legend>
						{legend}
					</legend>

					<label htmlFor='loginName'>
						{nameLabel}
					</label>
					<input
						id='loginName'
						name='loginName'
						onChange={this.handleInputChange}
						required
						type='text'
						value={name}
					/>

					<label htmlFor='loginPassword'>
						{passwordLabel}
					</label>
					<input
						id='loginPassword'
						name='loginPassword'
						onChange={this.handleInputChange}
						required
						type='password'
						value={password}
					/>

					<input
						name='loginSubmit'
						type='submit'
						value='Login'
					/>

				</fieldset>
			</form>

		)
	}
}
