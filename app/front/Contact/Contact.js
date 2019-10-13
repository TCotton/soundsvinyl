import React, { Component } from 'react';
import './contact.scss';
import axios from 'axios';
import { homeURI } from '../../helper_constants';

class Contact extends Component {

	constructor ( props ) {
		super( props );

		this.state = {
			contactName: '',
			contactEmail: '',
			contactMessage: '',
			error: null,
			message: null,
			zipcode: ''
		};

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	handleSubmit ( e ) {
		e.preventDefault();

		const {
			contactEmail,
			contactName,
			contactMessage,
		} = this.state;

		axios.post( `${homeURI}/apiV1/sendmail`, { contactEmail, contactName, contactMessage } )
			.then( res => {

				if( res.data.error ) {
					this.setState( { error: res.data.error } );
				}

				if( res ) {
					if( res.data.success ) {
						this.setState( { message: res.data.message } , () => {
							document.querySelector('body').scrollTop = 0;
						});
					}
				}

			}).catch( ( e ) => {
			this.setState( { error: e.toString() } );
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
			message,
			error,
			contactEmail,
			contactName,
			contactMessage,
			zipcode,
		} = this.state;

		return (
			<main styleName='contactPage'>
				<h2>
					Contact us
				</h2>
				<p>
					Please contact us if you any recommendations for records to review
				</p>

				{error &&
					<p className='error'>
						{error}
					</p>}

				{message &&
				<p className='message'>
					{message}
				</p>}

				<form onSubmit={this.handleSubmit}>
					<label htmlFor='contactName'>
						Your name
					</label>
					<input
						id='contactName'
						maxLength='254'
						name='contactName'
						onChange={this.handleInputChange}
						required
						type='text'
						value={contactName}
					/>

					<label htmlFor='contactEmail'>
						Your email
					</label>
					<input
						id='contactEmail'
						maxLength='254'
						name='contactEmail'
						onChange={this.handleInputChange}
						required
						type='email'
						value={contactEmail}
					/>

					<label htmlFor='contactMessage'>
						Your message
					</label>
					<textarea
						id='contactMessage'
						maxLength='500'
						minLength='10'
						name='contactMessage'
						onChange={this.handleInputChange}
						required
						value={contactMessage}
					/>

					<input
						disabled={message}
						name='contactSubmit'
						type='submit'
						value='submit'
					/>

					<span
						aria-hidden='true'
						className='hide'
					>
						<label
							aria-hidden='true'
							className='hide'
							htmlFor='zipcode'
						>
							Your zipcode
						</label>
						<input
							aria-hidden='true'
							className='hide'
							id='zipcode'
							name='zipcode'
							onChange={this.handleInputChange}
							type='text'
							value={zipcode}
						/>
					</span>

				</form>
			</main>
		)
	}
}

export default Contact;
