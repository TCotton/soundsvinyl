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

		return (
			<main styleName='contactPage'>
				<h2>Contact us</h2>
				<p>Nam vel ornare lorem sed eleifend egestas</p>

				<form onSubmit={this.handleSubmit}>
					<label htmlFor='contactName'>Your name</label>
					<input type='text' id='contactName' name='contactName' value={this.state.contactName} onChange={this.handleInputChange} required/>

					<label htmlFor='contactEmail'>Your email</label>
					<input type='email' id='contactEmail' name='contactEmail' value={this.state.contactEmail} onChange={this.handleInputChange} required/>

					<label htmlFor='contactMessage'>Your message</label>
					<textarea id='contactMessage' name='contactMessage' value={this.state.contactMessage}
										onChange={this.handleInputChange} required/>

					<input type='submit' name='contactSubmit' value='submit'/>
				</form>
			</main>
		)
	}
}

export default Contact;
