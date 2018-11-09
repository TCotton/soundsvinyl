import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';
import { homeURI } from '../../helper_constants';
import { createUsername } from '../../helper_functions';
import './account.scss';
import MyAccountForm from './MyAccountForm';

class MyAccount extends Component {

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

		const {
			registerName,
			registerPassword
		} = this.state;

		if (registerName && registerPassword) {

			const email = registerName;
			const password = registerPassword;

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

	handleSubmitLogin () {
		const { loginName, loginPassword } = this.state;

		if (loginName && loginPassword) {

			this.setState({error: null}); // place this in a lifecycle hook
			// `user/add`

			axios.post(`${homeURI}/apiV1/user/find`, {email: loginName, password: loginPassword})
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

		const { loginName, error, loginPassword, registerName, registerPassword } = this.state;

		const errorFunc = error ? () => {
			return (
				<p styleName='error'>
					{error}
				</p>
			)
		} : () => { return null };

		return (
			<main styleName='myAccount'>
				<h2>
					{'My Account'}
				</h2>
				<p>
					{'Either login or register an account with SoundsVinyl from this page'}
				</p>

				{errorFunc()}

				<section>
					<MyAccountForm
						legend='Login'
						name={loginName}
						nameLabel='Your email'
						onFormSubmit={this.handleSubmitLogin}
						onInputChange={this.handleInputChange}
						password={loginPassword}
						passwordLabel='Your password'
					/>

					<form onSubmit={this.handleSubmitRegister}>
						<fieldset>
							<legend>
								{'Register'}
							</legend>

							<label htmlFor='registerName'>
								{'Your email'}
							</label>
							<input
								id='registerName'
								name='registerName'
								onChange={this.handleInputChange}
								required
								type='text'
								value={registerName}
							/>

							<label htmlFor='registerPassword'>
								{'Your password'}
							</label>
							<input
								id='registerPassword'
								name='registerPassword'
								onChange={this.handleInputChange}
								required
								type='password'
								value={registerPassword}
							/>

							<input
								name='registerSubmit'
								type='submit'
								value='Register'
							/>

						</fieldset>
					</form>
				</section>
			</main>
		)
	}
}

export default MyAccount;
