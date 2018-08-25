import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';
import { homeURI } from '../helper_constants';
import { createUsername } from '../helper_functions';
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

		this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
		this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmitRegister (e) {
		e.preventDefault();

		if (this.state.registerName && this.state.registerPassword) {

			const email = this.state.registerName;
			const password = this.state.registerPassword;

			this.setState({error: null}); // place this in a lifecycle hook
			const username = createUsername(email);

			axios.post(`${homeURI}/apiV1/user/add`, {email, password, username})
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

						// go back to previous page
						window.location.href = document.referrer;
					}

				}).catch((e) => {

				if (e.toString().includes('409')) {
					this.setState({error: 'This email address is already registered'});
				}

			})
		}
	}

	handleSubmitLogin (e) {
		e.preventDefault();

		if (this.state.loginName && this.state.loginPassword) {

			this.setState({error: null}); // place this in a lifecycle hook
			// `user/add`

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

						// go back to previous page
						window.location.href = document.referrer;
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
				<p>Either login or register an account with soundsvinyl.co from this page</p>

				{error()}

				<section>
					<form onSubmit={this.handleSubmitLogin}>
						<fieldset>
							<legend>Login</legend>

							<label htmlFor='loginName'>Your email</label>
							<input type='text' id='loginName' name='loginName' value={this.state.loginName} onChange={this.handleInputChange} required/>

							<label htmlFor='loginPassword'>Your password</label>
							<input type='password' id='loginPassword' name='loginPassword' value={this.state.loginPassword} onChange={this.handleInputChange} required/>

							<input type='submit' name='loginSubmit' value='Login'/>

						</fieldset>
					</form>

					<form onSubmit={this.handleSubmitRegister}>
						<fieldset>
							<legend>Register</legend>

							<label htmlFor='registerName'>Your email</label>
							<input type='text' id='registerName' name='registerName' value={this.state.registerName} onChange={this.handleInputChange} required/>

							<label htmlFor='registerPassword'>Your password</label>
							<input type='password' id='registerPassword' name='registerPassword' value={this.state.registerPassword} onChange={this.handleInputChange} required/>

							<input type='submit' name='registerSubmit' value='Register'/>

						</fieldset>
					</form>
				</section>
			</main>
		)
	}
}

export default MyAccount;
