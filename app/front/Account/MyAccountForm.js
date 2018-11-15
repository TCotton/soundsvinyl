import { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types';

export default class MyAccountForm extends Component {

	static propTypes = {
		disabled: PropTypes.bool,
		formName: PropTypes.string.isRequired,
		legend: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		nameLabel: PropTypes.string.isRequired,
		onFormSubmit: PropTypes.func.isRequired,
		onInputChange: PropTypes.func.isRequired,
		password: PropTypes.string.isRequired,
		passwordLabel: PropTypes.string.isRequired
	};

	static defaultProps = {
		disabled: false
	}

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
		const { name, password, legend, nameLabel, passwordLabel, formName, disabled } = this.props;

		return (

			<form
				autoComplete='off'
				name={formName}
				onSubmit={this.handleSubmitLogin}
			>
				<fieldset>
					<legend>
						{legend}
					</legend>

					<label htmlFor={`${formName}loginName`}>
						{nameLabel}
					</label>
					<input
						disabled={disabled}
						id={`${formName}loginName`}
						name={`${formName}loginName`}
						onChange={this.handleInputChange}
						required
						type='text'
						value={name}
					/>

					<label htmlFor={`${formName}loginPassword`}>
						{passwordLabel}
					</label>
					<input
						disabled={disabled}
						id={`${formName}loginPassword`}
						name={`${formName}loginPassword`}
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
