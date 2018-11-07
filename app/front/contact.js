import React from 'react';
import './contact.scss';

class Contact extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			contactName: '',
			contactEmail: '',
			contactMessage: ''
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

		const {
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
						disabled
						type='submit'
						name='contactSubmit'
						value='submit (temp disabled)'
					/>
				</form>
			</main>
		)
	}
}

export default Contact;
