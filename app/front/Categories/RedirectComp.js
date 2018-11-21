import React, { Component } from 'react';
import './categoriesHomepage.scss';
import PropTypes from 'prop-types';
import { Redirect, withRouter, BrowserRouter as Router } from 'react-router-dom';

class RedirectComp extends Component {

	static propTypes = {
		search: PropTypes.oneOfType( [
			PropTypes.string,
			PropTypes.bool
		] )
	}

	static defaultProps = {
		search: false
	}

	constructor ( props ) {
		super( props );
	}

	render () {
		const { search } = this.props;

		if( !search ) {
			return null;
		}

		if( search ) {
			return (
				<Redirect
					push
					exact to={search} // eslint-disable-line
				/>
			)
		}
	}
}

export default withRouter( RedirectComp );
