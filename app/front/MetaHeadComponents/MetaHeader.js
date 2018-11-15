import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

class MetaHeader extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired
	}

	constructor ( props ) {
		super( props );
	}

	render () {
		const { title } = this.props;

		return (
			<Helmet>
				<title>
					{'Soundsvinyl.co: '}
					{title}
				</title>
			</Helmet>
		)
	}
}

export default MetaHeader;
