import React, { Component } from 'react';

class Error extends Component {
	render () {
		const $error = 'Error path does not exist :(';
		return (
			<main>
				<p>
					{$error}
				</p>
			</main>
		)
	}
}

export default Error;
