import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';
import { homeURI } from '../../helper_constants';
import { createUsername } from '../../helper_functions';
import './account.scss';
import MyAccountForm from './MyAccountForm';
import ErrorBoundary from '../errorBoundaries/ErrorBoundary';

class MyAccount extends Component {

	constructor (props) {
		super(props);

		this.state = {
			loginFormloginName: '',
			loginFormloginPassword: '',
			registerFormloginName: '',
			registerFormloginPassword: '',
			error: null
		};

		this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
		this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmitRegister (e) {
		e.preventDefault();

		const {
			registerFormloginName,
			registerFormloginPassword
		} = this.state;

		if (registerFormloginName && registerFormloginPassword) {

			const email = registerFormloginName;
			const password = registerFormloginPassword;

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
		const { loginFormloginName, loginFormloginPassword } = this.state;

		if (loginFormloginName && loginFormloginPassword) {

			this.setState({error: null}); // place this in a lifecycle hook
			// `user/add`

			axios.post(`${homeURI}/apiV1/user/find`, {email: loginFormloginName, password: loginFormloginPassword})
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

		const { loginFormloginName, error, loginFormloginPassword, registerFormloginName, registerFormloginPassword } = this.state;

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
					My Account
				</h2>
				<p>
					Either login or register an account with SoundsVinyl from this page
				</p>

				{errorFunc()}

				<section>
					<ErrorBoundary>
						<MyAccountForm
							formName='loginForm'
							legend='Login'
							name={loginFormloginName}
							nameLabel='Your email'
							onFormSubmit={this.handleSubmitLogin}
							onInputChange={this.handleInputChange}
							password={loginFormloginPassword}
							passwordLabel='Your password'
						/>
					</ErrorBoundary>

					<ErrorBoundary>
						<MyAccountForm
							disabled
							formName='registerForm'
							legend='Register'
							name={registerFormloginName}
							nameLabel='Your email'
							onFormSubmit={this.handleSubmitRegister}
							onInputChange={this.handleInputChange}
							password={registerFormloginPassword}
							passwordLabel='Your password'
						/>
					</ErrorBoundary>
				</section>
			</main>
		)
	}
}

export default MyAccount;
