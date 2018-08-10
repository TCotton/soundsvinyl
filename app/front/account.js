import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';
import { homeURI } from '../helper_constants';
import './account.scss';

class MyAccount extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			loginName: '',
			loginPassword: '',
			registerName: '',
			registerPassword: '',
			error: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit (e) {
		e.preventDefault();

		if (this.state.loginName && this.state.loginPassword) {

			this.setState({error: null}); // place this in a lifecycle hook

			axios.post(`${homeURI}/apiV1/user/find`, {email: this.state.loginName, password: this.state.loginPassword})
				.then(res => {

					if (res.data.error) {
						this.setState({error: res.data.error});
					}

					if (res.data.auth) {

						const cookies = new Cookies();

						cookies.set('token', res.data.token, {
							expires: moment().add(1, 'days').toDate(),
							path: '/',
							domain: window.location.hostname,
							secure: true,
						});

						window.location.href = window.location.protocol + '//' + window.location.host + '/#/admin';
					}

				});
		}
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

		const error = this.state.error ? () => {
			return (
				<p styleName='error'>{this.state.error}</p>
			)
		} : () => { return null };

		return (
			<main styleName='myAccount'>
				<h2>My Account</h2>
				<p>Either login or register an account with soundsvinyl.con from this page</p>

				{error()}

				<section>
					<form onSubmit={this.handleSubmit}>
						<fieldset>
							<legend>Login</legend>

							<label htmlFor='loginName'>Your email</label>
							<input type='text' id='loginName' name='loginName' value={this.state.loginName}
										 onChange={this.handleInputChange} required/>

							<label htmlFor='loginPassword'>Your password</label>
							<input type='password' id='loginPassword' name='loginPassword' value={this.state.loginPassword}
										 onChange={this.handleInputChange} required/>

							<input type='submit' name='loginSubmit' value='Login'/>

						</fieldset>
					</form>

					<form onSubmit={this.handleSubmit}>
						<fieldset>
							<legend>Register</legend>

							<label htmlFor='registerName'>Your email</label>
							<input type='text' id='registerName' name='registerName' value={this.state.registerName}
										 onChange={this.handleInputChange} required/>

							<label htmlFor='registerPassword'>Your password</label>
							<input type='password' id='registerPassword' name='registerPassword' value={this.state.registerPassword}
										 onChange={this.handleInputChange} required/>

							<input type='submit' name='registerSubmit' value='Register'/>

						</fieldset>
					</form>
				</section>
			</main>
		)
	}
}

export default MyAccount;
