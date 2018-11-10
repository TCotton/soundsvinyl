import React, { Component } from 'react';
import './contact.scss';
import axios from 'axios';
import { homeURI } from '../helper_constants';
import Cookies from 'universal-cookie';
import moment from 'moment';

class Contact extends Component {

	constructor (props) {
		super( props );

		this.state = {
			contactName: '',
			contactEmail: '',
			contactMessage: '',
			error: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit (e) {
		e.preventDefault();

		const {
			contactEmail,
			contactName,
			contactMessage
		} = this.state;

		axios.post(`${homeURI}/apiV1/user/add`, {contactEmail, contactName, contactMessage})
			.then(res => {

				if (res.data.error) {
					this.setState({error: res.data.error});
				}

			}).catch((e) => {
				this.setState();
		})
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

		const {
			error,
			contactEmail,
			contactName,
			contactMessage
		} = this.state;

		return (
			<main styleName='contactPage'>
				<h2>
					{'Contact us'}
				</h2>
				<p>
					{'Please contact us if you any recommendations for records to review'}
				</p>

				{error &&
					<p className='error'>
						{error}
					</p>
				}

				<form onSubmit={this.handleSubmit}>
					<label htmlFor='contactName'>
						{'Your name'}
					</label>
					<input
						id='contactName'
						name='contactName'
						onChange={this.handleInputChange}
						type='text'
						value={contactName}
					/>

					<label htmlFor='contactEmail'>
						{'Your email'}
					</label>
					<input
						id='contactEmail'
						name='contactEmail'
						onChange={this.handleInputChange}
						required
						type='email'
						value={contactEmail}
					/>

					<label htmlFor='contactMessage'>
						{'Your message'}
					</label>
					<textarea
						id='contactMessage'
						name='contactMessage'
						onChange={this.handleInputChange}
						required
						value={contactMessage}
					/>

					<input
						name='contactSubmit'
						type='submit'
						value='submit'
					/>
				</form>
			</main>
		)
	}
}

export default Contact;
