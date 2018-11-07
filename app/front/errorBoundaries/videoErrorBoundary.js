import React from 'react';
import PropTypes from 'prop-types';
import './videoErrorBoundary.scss';

export default class VideoErrorBoundary extends React.Component {

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf( PropTypes.node ),
			PropTypes.node
		]).isRequired
	};

	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch() {
		// Display fallback UI
		this.setState({ hasError: true });
	}

	render() {

		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			// You can render any custom fallback UI
			return (
				<p styleName='videoErrorBoundary'>
					{'Something went wrong.'}
				</p>
			);
		}
		return children;
	}
}
